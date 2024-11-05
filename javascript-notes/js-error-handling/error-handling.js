// 1. Using try...catch for Synchronous Error Handling 

try {
  // Code that might throw an error
  let result = someUndefinedFunction();
  console.log(result);
} catch (error) {
  // Handles the error
  console.error("An error occurred:", error.message);
}

---------------------------------------------------------

// 2. Creating Custom Errors

function customError(word) {
  if (word === 'bad') {
    throw new Error(`Please mind your language.`);
  }
  return `you entered ${word}`;
}

try {
  console.log(customError('bad'));
} catch (error) {
  console.log('Error: ', error.message);
}

-------------------------------------------------------------

// 3. Error Handling in Asynchronous Code

import axios from 'axios';

const userData = async () => {
  let url = 'https://jsonplaceholder.typicode.com/users';
  try {
    const userData = await axios.get(url);
    const users = userData.data;

    users.map((user) => console.log(user.name));
  } catch (e) {
    console.error('error : ', e.message);
  }
};

userData();

--------------------------------------------------------

// 4. Using finally for Cleanup

try {
  console.log("Start process");
  // Simulate an error
  throw new Error("Something went wrong");
} catch (error) {
  console.error("Caught error:", error.message);
} finally {
  console.log("Process complete");
}

OUTPUT:
Start process
Caught error: Something went wrong
Process complete


---------------------------------------------

// 5. Handling Specific Error Types : TypeError, ReferenceError, and SyntaxError

try {
  let obj;
  console.log(obj.name); // ReferenceError if obj is undefined
} catch (error) {
  if (error instanceof ReferenceError) {
    console.error("ReferenceError handled:", error.message);
  } else {
    console.error("Unknown error:", error.message);
  }
}
