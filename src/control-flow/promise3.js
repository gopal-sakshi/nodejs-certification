// const p = new Promise(resovle => setTimeout(resovle));
const p = new Promise((resovle, reject) => setTimeout(() => {resovle} ), 0);

p.then((res) => console.log(`1st then ---> ${res}`));


/*
    Promise.resolve and new Promise(resolve) are interchangeable ==========> WRONG
    
    Promise.resolve will create a promise which is already resolved
    whereas new Promise(resolve) creates a promise which is neither resolved nor rejected.

    If you want to introduce a delay before resolving the promise, it is not possible with Promise.resolve

    

*/