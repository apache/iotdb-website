<!-- TOC -->

- [Chapter2: Quick Start](#chapter2-quick-start)
    - [Build](#build)
    - [Configure](#configure)
    - [Start](#start)
        - [Start Server](#start-server)
        - [Start Client](#start-client)
        - [Have a try](#have-a-try)
        - [Stop Server](#stop-server)

<!-- /TOC -->
# Chapter2: Quick Start

This short guide will walk you through the basic process of using IoTDB. For a more-complete guide, please visit our website’s [Document Part](http://tsfile.org/document).

## Build

If you are not the first time that building IoTDB, remember deleting the following files:

```
rm -rf iotdb/data/
rm -rf iotdb/lib/
```

Then you can build IoTDB using Maven:

```
mvn clean package -Dmaven.test.skip=true
```

If successful, you will see the the following text in the terminal:

```
[INFO] BUILD SUCCESS
```
Otherwise, you may need to check the error statements and fix the problems.

After build, the IoTDB project will be at the subfolder named iotdb. The folder will include the following contents:


```
iotdb/     <-- root path
|
+- bin/       <-- script files
|
+- conf/      <-- configuration files
|
+- lib/       <-- project dependencies
|
+- LICENSE    <-- LICENSE
```

> NOTE: We also provide already built JARs and project at [http://tsfile.org/download](http://tsfile.org/download) instead of build the jar package yourself.

## Configure

Before starting to use IoTDB, you need to config the configuration files first. For your convenience, we have already set the default config in the files.

In total, we provide users three kinds of configurations module: environment config module (iotdb-env.bat, iotdb-env.sh), system config module (tsfile-format.properties, iotdb-engine.properties) and log config module (logback.xml). All of these kinds of configuration files are put in iotdb/config folder.

For more, you are advised to check Chapter 4 to give you the details.

## Start

### Start Server

After that we start the server. Running the startup script: 

```
# Unix/OS X
> $IOTDB_HOME/bin/start-server.sh

# Windows
> $IOTDB_HOME\bin\start-server.bat
```


### Start Client

Now let's trying to read and write some data from IoTDB using our Client. To start the client, you need to explicit the server's IP and PORT as well as the USER_NAME and PASSWORD. 

```
# Unix/OS X
> $IOTDB_HOME/bin/start-client.sh -h {IP} -p {PORT} -u {USER_NAME}

# Windows
> $IOTDB_HOME\bin\start-client.bat -h {IP} -p {PORT} -u {USER_NAME}
```

> NOTE: In the system, we set a default user in IoTDB named 'root'. The default password for 'root' is 'root'. You can use this default user if you are making the first try or you didn't create users by yourself.

The command line client is interactive so if everything is ready you should see the welcome logo and statements:

```
 _____       _________  ______   ______
|_   _|     |  _   _  ||_   _ `.|_   _ \
  | |   .--.|_/ | | \_|  | | `. \ | |_) |
  | | / .'`\ \  | |      | |  | | |  __'.
 _| |_| \__. | _| |_    _| |_.' /_| |__) |
|_____|'.__.' |_____|  |______.'|_______/  version x.x.x


IoTDB> login successfully
IoTDB>
```
### Have a try
Now, you can use IoTDB SQL to operate IoTDB, and when you’ve had enough fun, you can input 'quit' or 'exit' command to leave the client. 

But lets try something slightly more interesting:

``` 
IoTDB> SET STORAGE GROUP TO root.ln
execute successfully.
IoTDB> CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN
execute successfully.
```
Till now, we have already create a table called root.vehicle and add a colomn called d0.s0 in the table. Let's take a look at what we have done by 'SHOW TIMESERIES' command.

``` 
IoTDB> SHOW TIMESERIES
===  Timeseries Tree  ===

root:{
    ln:{
        wf01:{
            wt01:{
                status:{
                     DataType: BOOLEAN,
                     Encoding: PLAIN,
                     args: {},
                     StorageGroup: root.ln
                }
            }
        }
    }
}
```

For a further try, create a timeseries again and use SHOW TIMESERIES to check result.

```
IoTDB> CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE
IoTDB> SHOW TIMESERIES
===  Timeseries Tree  ===

root:{
    ln:{
        wf01:{
            wt01:{
                status:{
                     DataType: BOOLEAN,
                     Encoding: PLAIN,
                     args: {},
                     StorageGroup: root.ln
                },
                temperature:{
                     DataType: FLOAT,
                     Encoding: RLE,
                     args: {},
                     StorageGroup: root.ln
                }
            }
        }
    }
}
```
Now, for your conveniect, SHOW TIMESERIES clause also supports extention syntax, the pattern is (for further details, check Chapter x):

```
SHOW TIMESERIES {PATH}
```

Here is the example:

```
IoTDB> SHOW TIMESERIES root.ln.wf01.wt01
+------------------------------+--------------+--------+--------+
|                    Timeseries| Storage Group|DataType|Encoding|
+------------------------------+--------------+--------+--------+
|      root.ln.wf01.wt01.status|       root.ln| BOOLEAN|   PLAIN|
| root.ln.wf01.wt01.temperature|       root.ln|   FLOAT|     RLE|
+------------------------------+--------------+--------+--------+
Total timeseries number = 2
Execute successfully.
```
We can also use SHOW STORAGE GROUP to check created storage group:

```
IoTDB> show storage group
+-----------------------------------+
|                      Storage Group|
+-----------------------------------+
|                            root.ln|
+-----------------------------------+
Total storage group number = 1
Execute successfully.
It costs 0.006s
```


Insert timeseries data is the basic operation of IoTDB, you can use 'INSERT' command to finish this:

```
IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);
execute successfully.
IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71) execute successfully.
```
The data we've just inserted displays like this:

```
IoTDB> SELECT status FROM root.ln.wf01.wt01
+-----------------------+------------------------+
|                   Time|root.ln.wf01.wt01.status|
+-----------------------+------------------------+
|1970-01-01T08:00:00.100|                    true|
|1970-01-01T08:00:00.200|                   false|
+-----------------------+------------------------+
record number = 1
execute successfully.
```

We can also query several timeseries data at once like this:

```
IoTDB> SELECT * FROM root.ln.wf01.wt01
+-----------------------+--------------------------+-----------------------------+
|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------+--------------------------+-----------------------------+
|1970-01-01T08:00:00.100|                      true|                         null|
|1970-01-01T08:00:00.200|                     false|                        20.71|
+-----------------------+--------------------------+-----------------------------+
```

If your session looks similar to what’s above, congrats, your IoTDB is operational!

For more on what commands are supported by IoTDB SQL, see Chapter xx. It will give you help.

### Stop Server

The server can be stopped with ctrl-C or the following script:

```
# Unix/ OS X
> $IOTDB_HOME/bin/stop-server.sh

# Windows
> $IOTDB_HOME\bin\stop-server.bat
```


