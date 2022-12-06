`Perf Hook APIs`
- measure the time 
    it takes individual dependencies to load, 
    how long your app takes to initially start
    even how long individual web service API calls take
- make more informed decisions on the efficiency of specific algorithms
- the effects of API choices on application performance

`Different classes of performance hooks`
- Class Performance
- Class PerformanceEntry
- Class PerformanceNodeTiming Extends PerformanceEntry
- Class PerformanceObserver
- Class Histogram
<!-------------------------------------------------------------------------------------------------------------------------------------->

`For synchronous functions`
- use performance.timerify(function23);
- change the entry type to function...
- obs.observe({ entryTypes: ['function'] });                          // use this for performance.timerify(function23)

`For asynchronous functions`

performance.mark('startTag23');
await function23();
performance.mark('endTag23');
performance.measure('time_for_function23', 'startTag23', 'endTag23');

const obs = new PerformanceObserver((list) => { 
    const entries = list.getEntries();
})

obs.observe({ entryTypes: ['measure'], buffered: false });
<!-------------------------------------------------------------------------------------------------------------------------------------->

PerformanceEntry
- is also a WebAPI
- used on client side (inside a browser)