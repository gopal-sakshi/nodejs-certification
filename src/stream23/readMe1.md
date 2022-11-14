The four types of streams provided by the Stream API:

`Readable stream` (streams from which data can be read)
`Writable stream` (streams to which we can write data )
`Duplex stream` (streams that are both Readable and Writable)
`Transform stream` ( a type of Duplex stream that can modify or transform the data as it is written and read )


If you try to read from a Writable stream, and write to a Readable stream your process will throw with error such as

<TypeError: dest.write is not a function>

or

Error [ERR_STREAM_CANNOT_PIPE]: Cannot pipe, not readable
---------------------------------------------------------------------------------------------------------------