const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer) {
    // Change this line
    resolve("We got the data");
  } else {
    reject("Data not received");
    // Change this line
  }
});
// REJECTED (error), RESOLVED (result)
const makeServerRequestTwo = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest.catch((error) => {
  console.log(error);
});

makeServerRequest.then((result) => {
  console.log(result);
});
