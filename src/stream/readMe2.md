A stream is an abstract interface for working with streaming data”.
“There are many stream objects provided by Node.js. For instance, a request to an HTTP server and process.stdout are both stream instances”.
Streams are an interface used to process data, one chunk at a time.
They are especially useful when:
You don’t need to access your data all at once.
The size of your data is unknown or large enough to increase ram usage significantly
Such scenarios can include: user input, file you need to read from, the result of database query ( fetching a million objects for analytics/exports etc. ).

In those case, not storing everything in memory at once will be beneficial.