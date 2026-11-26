<!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements. See the NOTICE file
distributed with this work for additional information
regarding copyright ownership. The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License. You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied. See the License for the
specific language governing permissions and limitations
under the License.
-->

# Apache IoTDB Installation Guide for AI Agents

Install the latest stable Apache IoTDB all-in-one binary as a local single-node
instance (one ConfigNode and one DataNode).

## 1. Prepare

- Use Linux, macOS, or Windows with WSL2, using Bash.
- Require **JDK 17 or later**. Set `JAVA_HOME` and put `$JAVA_HOME/bin` on `PATH`.
- Require `curl`, `jq`, `unzip`, `awk`, and either `sha512sum` or `shasum`.
- Allow at least 4 GiB RAM and 1 GiB free disk. Use a path without spaces or
  non-ASCII characters and the same OS user for every IoTDB command.
- Keep the default single-node ports available: `6667`, `10710`, `10720`,
  `10730`, `10740`, `10750`, and `10760`.

## 2. Download and Verify

Run the following blocks in one Bash session. The release number is resolved
from Apache's release inventory, excluding release candidates and snapshots.
If discovery fails, select the latest All-in-one release on the official
[download page](https://iotdb.apache.org/Download/) and set `VERSION` manually.

```bash
set -euo pipefail
for command in java javac curl jq unzip awk grep sed sleep; do
  command -v "$command" >/dev/null 2>&1 || {
    echo "Missing required command: $command" >&2
    exit 1
  }
done
if ! command -v sha512sum >/dev/null 2>&1 && ! command -v shasum >/dev/null 2>&1; then
  echo "Missing required command: sha512sum or shasum" >&2
  exit 1
fi
java -version
javac -version
JAVA_VERSION=$(java -version 2>&1 | awk -F '"' '/version/ {print $2; exit}')
JAVA_MAJOR=${JAVA_VERSION%%.*}
if [ "$JAVA_MAJOR" = "1" ]; then
  JAVA_MAJOR=${JAVA_VERSION#1.}
  JAVA_MAJOR=${JAVA_MAJOR%%.*}
fi
case "$JAVA_MAJOR" in
  ''|*[!0-9]*) echo "Cannot determine the JDK major version" >&2; exit 1 ;;
esac
if [ "$JAVA_MAJOR" -lt 17 ]; then
  echo "JDK 17 or later is required (found $JAVA_VERSION)" >&2
  exit 1
fi
mkdir -p "$HOME/iotdb"
cd "$HOME/iotdb"
if [ -z "${VERSION:-}" ]; then
  VERSION=$(curl -fsSL --retry 3 https://projects.apache.org/json/foundation/releases.json |
    jq -er '.iotdb | keys |
      map(select(test("^apache-iotdb-[0-9]+\\.[0-9]+\\.[0-9]+$")) |
        ltrimstr("apache-iotdb-")) |
      max_by(split(".") | map(tonumber)) // error("No stable IoTDB release found")') || {
    echo "Could not discover the latest release. Set VERSION manually and rerun this block." >&2
    exit 1
  }
fi
if [[ ! "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "VERSION must be in the form major.minor.patch" >&2
  exit 1
fi
PACKAGE="apache-iotdb-${VERSION}-all-bin.zip"
curl -fL --retry 3 -o "$PACKAGE" \
  "https://www.apache.org/dyn/closer.lua/iotdb/${VERSION}/${PACKAGE}?action=download"
curl -fsSL --retry 3 -o "$PACKAGE.sha512" \
  "https://downloads.apache.org/iotdb/${VERSION}/${PACKAGE}.sha512"

EXPECTED=$(awk '{print $1; exit}' "$PACKAGE.sha512")
if command -v sha512sum >/dev/null 2>&1; then
  ACTUAL=$(sha512sum "$PACKAGE" | awk '{print $1}')
else
  ACTUAL=$(shasum -a 512 "$PACKAGE" | awk '{print $1}')
fi
test "$ACTUAL" = "$EXPECTED" || { echo "SHA-512 mismatch" >&2; exit 1; }
unzip -q -o "$PACKAGE"
cd "apache-iotdb-${VERSION}-all-bin"
export IOTDB_HOME="$PWD"
```

## 3. Start

Set explicit memory budgets for this small local instance. Keep the default
loopback addresses and use the same OS user to start and stop IoTDB.

```bash
sed 's/^MEMORY_SIZE=.*/MEMORY_SIZE=512M/' conf/confignode-env.sh > conf/confignode-env.sh.tmp
mv conf/confignode-env.sh.tmp conf/confignode-env.sh
sed 's/^MEMORY_SIZE=.*/MEMORY_SIZE=1G/' conf/datanode-env.sh > conf/datanode-env.sh.tmp
mv conf/datanode-env.sh.tmp conf/datanode-env.sh
ulimit -n 65535 || true
bash sbin/start-standalone.sh
```

The start script launches both nodes in the background. Poll until one ConfigNode
and one DataNode report `Running`; if startup fails, inspect the two node logs.

```bash
attempt=1
while [ "$attempt" -le 60 ]; do
  if cluster=$(bash sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root \
      -sql_dialect table -e "SHOW CLUSTER" 2>&1) &&
      grep -q 'ConfigNode.*Running' <<<"$cluster" &&
      grep -q 'DataNode.*Running' <<<"$cluster"; then
    printf '%s\n' "$cluster"
    break
  fi
  if [ "$attempt" -eq 60 ]; then
    printf '%s\n' "$cluster" >&2
    echo "IoTDB did not become ready within 120 seconds" >&2
    exit 1
  fi
  sleep 2
  attempt=$((attempt + 1))
done
```

## 4. Verify a Write and Query

```bash
bash sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root \
  -sql_dialect table -e "CREATE DATABASE IF NOT EXISTS agent_install_check;
    USE agent_install_check;
    CREATE TABLE IF NOT EXISTS readings (device_id STRING TAG, value DOUBLE FIELD);
    INSERT INTO readings(time, device_id, value) VALUES (1, 'probe', 42.0);
    SELECT device_id, value FROM readings;"
```

Success requires a returned row containing `probe` and `42.0`, with no SQL errors.
The endpoint is `127.0.0.1:6667`; initial credentials are `root` / `root`.
Change the password before enabling remote access.

To stop it later, run from the installation directory:

```bash
bash sbin/stop-standalone.sh
```

For production sizing and cluster deployment, see the
[deployment guide](https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment_apache.html).
