const ApiRequestFactory = require("./abstractFactory");

/**** Use this in another class making the product class and client class isolated ***/
const availableOptions = ["tcp", "http"];
// const apiRequest = ApiRequestFactory.createApiRequest(availableOptions[Math.floor(Math.random() * 2)]);
const apiRequest = ApiRequestFactory.createApiRequest(availableOptions[0]);
apiRequest.makeGetRequest("localhost:3044/stream/path")
    .then(response => console.log("res ====> ", JSON.parse(response)))
    .catch(err => console.log(err));