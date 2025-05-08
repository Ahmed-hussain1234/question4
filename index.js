function getUserDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = true; // Change this to false to simulate an error

      if (isSuccess) {
        resolve("User Found");
      } else {
        reject("User Not Found");
      }
    }, 1000);
  });
}

// Calling the function and handling the Promise
getUserDetails()
  .then((message) => {
    console.log(message); // Output: "User Found"
  })
  .catch((error) => {
    console.error(error); // Output: "User Not Found"
  });
