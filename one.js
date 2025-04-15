//call, apply and bind

function sayHello() {
    console.log(this.name);
  }
  const obj = { name: "JS" };
  sayHello.call(obj);
  sayHello.apply(obj);
  const bound = sayHello.bind(obj);
  bound();


// Method	Invokes Function?	Argument Style	        Returns
// call()	Yes	                Comma-separated args	Result
// apply()	Yes	                Array of args	        Result
// bind()	No	                Optional args	        Function


/* ------------------------- 
   ------------------------- */ 

// 2. What is prototypal inheritance?

// Objects inherit from other objects via their prototype.

/* ------------------------- 
   ------------------------- */ 


//3. What is async/await and how does it work?
// async/await is syntactic sugar over Promises, making 
// asynchronous code look more like synchronous code for better readability.

// async makes a function return a Promise.

// await pauses the execution of an async function until the Promise is resolved or rejected.
  
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data received!"), 1000);
    });
  };
  
  const showData = async () => {
    const result = await fetchData(); // waits until the promise resolves
    console.log(result);
  };
  
  showData(); // logs "Data received!" after 1 second
  
  /* ------------------------- 
   ------------------------- */ 


  //4. What is the difference between microtasks and macrotasks
  console.log("script start");

  setTimeout(() => {
    console.log("setTimeout");
  }, 0);
  
  Promise.resolve().then(() => {
    console.log("promise");
  });
  
  console.log("script end");
  
  // Output:
  // script start
  // script end
  // promise         <- microtask
  // setTimeout      <- macrotask
  
  /* ------------------------- 
   ------------------------- */ 

//   Promise.all() runs multiple Promises in parallel and resolves when all Promises resolve. 
// If any Promise fails, it rejects immediately.

// Unlike Promise.all(), Promise.allSettled() waits for all Promises to settle (either resolve or reject)
//  and returns an array of results.

// Promise.race() returns the result of the first Promise that settles (either resolve or reject).

