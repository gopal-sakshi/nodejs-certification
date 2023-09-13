socketA, pipeB;
watchedList.add(socketA, FOR_READ);                     //  resources are added to a data structure     
watchedList.add(pipeB, FOR_READ);
while (events = demultiplexer.watch(watchedList)) {     // 2a    
    for( let event in events) {          // 3b        // event loop
        data = event.resource.read();           // This read will never block and will always return data
        if (data === RESOURCE_CLOSED)           // the resource was closed, remove it from the watched list
            demultiplexer.unwatch(event.resource);
        else                                    // some actual data was received, process it
            consumeData(data);
    }
}

/*

2a) 
The event notifier is set up with the group of resources to be watched. 
This call is synchronous & blocks until any of the watched resources is ready for a read. 
When this occurs, the event demultiplexer returns from the call 
    and a new set of events is available to be processed.

3b)
Each event returned by the event demultiplexer is processed. 
At this point, the resource associated with each event is guaranteed to be ready to read 
and to not block during the operation. 
When all the events are processed, the flow will block again on the event demultiplexer 
until new events are again available to be processed. This is called the event loop.

*/
