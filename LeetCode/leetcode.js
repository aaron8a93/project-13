const createHelloWorld = function() {
    return function(...args) {
      return "Hello World";
    };
  };
  
  const a = createHelloWorld();
  console.log(a()); // Output: "Hello World"