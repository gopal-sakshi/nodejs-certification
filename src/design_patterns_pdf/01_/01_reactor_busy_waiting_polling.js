resources = [socketA, socketB, pipeA];
while (!resources.isEmpty()) {
    for (i = 0; i < resources.length; i++) {
        resource = resources[i];
        var data = resource.read();             //try to read
        if (data === NO_DATA_AVAILABLE)         //there is no data to read at the moment
            continue;
        if (data === RESOURCE_CLOSED)           //the resource was closed, remove it from the list
            resources.remove(i);
        else                                    //some data was received, process it
            consumeData(data);
    }
}

// till resources is empty... we will poll by calling read() on each resources