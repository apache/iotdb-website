# IoTDB website

[![Build Status](https://builds.apache.org/view/I/view/IoTDB/job/IoTDB%20Website/badge/icon)](https://builds.apache.org/view/I/view/IoTDB/job/IoTDB%20Website/)

See https://iotdb.apache.org/

## Requirements

* Node.js
* npm

Please make sure node and npm are latest version.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Deploy Manually

Copy all files in dist/ folder to asf-site branch.

## Directory Structure

```
.
├─ docs
│  ├─ README.md	       //Home
│  └─ .vuepress
│  │  └─ components    //Global vue template
│  │  └─ dist          //Build directory
│  │  └─ public        //Store static files
│  │  └─ config.js	   //Configuration
│  └─ document         //document 
│  └─ download         //download
│  └─ ...              
└─ package.json
```

