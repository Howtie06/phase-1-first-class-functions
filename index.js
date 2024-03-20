// receivesAFunction function
function receivesAFunction(callback) {
    callback(); // Calling the callback function
  }
  
  // returnsANamedFunction function
  function returnsANamedFunction() {
    // Returning a named function
    return function namedFunction() {
      console.log("This is a named function");
    }
  }
  
  // returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    // Returning an anonymous function
    return function() {
      console.log("This is an anonymous function");
    }
  }
  
  // Example usage of receivesAFunction function
  function callbackFunction() {
    console.log("Callback function called");
  }
  
  receivesAFunction(callbackFunction);
  
  // Example usage of returnsANamedFunction function
  const namedFunction = returnsANamedFunction();
  namedFunction();
  
  // Example usage of returnsAnAnonymousFunction function
  const anonymousFunction = returnsAnAnonymousFunction();
  anonymousFunction();