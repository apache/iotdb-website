# Chapter 2: Concept

## Compression

When the time series is written and encoded as binary data according to the specified type, IoTDB compresses the data using compression technology to further improve space storage efficiency. Although both encoding and compression are designed to improve storage efficiency, encoding techniques are usually only available for specific data types (e.g., second-order differential encoding is only suitable for INT32 or INT64 data type, and storing floating-point numbers requires multiplying them by 10m to convert to integers), after which the data is converted to a binary stream. The compression method (SNAPPY) compresses the binary stream, so the use of the compression method is no longer limited by the data type.

IoTDB allows you to specify the compression method of the column when creating a time series, and now supports two compression methods: 

* UMCOMPRESSED

* SNAPPY

The specified syntax for compression is detailed in [Create Timeseries Statement](/#/Documents/progress/chap5/sec4).
