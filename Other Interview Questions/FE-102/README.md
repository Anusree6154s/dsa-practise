## Interview Questions

### Grading Quiz Week 2

1. What are async and defer?
2. What is the difference between querySelector and QuerySelectorAll?
3. What is setTimeout?

### Grading Quiz Week 3

1. What is async-await and how does it work?
2. What is a promise and what is its type?
3. What is the difference between Synchronous and Asynchronous functions?
4. What are the different ways of fetching data?
5. Define Callback Hell in Javascript.
6. What is asynchronous JavaScript?
7. What is async API?
8. What is fetch API in Javascript? How does it handle JSON responses?
9. What is an API and different rest methods we use?
10. Can you explain the difference between a REST and SOAP API?
11. What are REST APIs and why are they so popular?

## Answers

### Grading Quiz Week 2

1. What are async and defer?
   - **Script Loading Attributes**: Control when scripts are executed during page load.
   - **Async**: Loads scripts asynchronously, allowing them to run simultaneously with HTML parsing.
   - Example: `<script src="script.js" async></script>`
   - **Defer**: Defers script execution until after HTML parsing, ensuring they execute in order.
   - Example: `<script src="script.js" defer></script>`
   - **Usage**: Async is ideal for non-essential scripts that don't rely on page structure, while defer ensures scripts are executed in the correct order, beneficial for scripts dependent on DOM elements.
2. What is the difference between querySelector and QuerySelectorAll?

   - querySelector

     - **Returns**: Selects the first element that matches the specified CSS selector.
     - **Single Element**: Returns only one element, even if multiple match the selector.
     - **Example**: `document.querySelector('.example')` selects the first element with class 'example'.

   - querySelectorAll
     - **Returns**: Selects all elements that match the specified CSS selector.
     - **Multiple Elements**: Returns a NodeList containing all matching elements.
     - **Example**: `document.querySelectorAll('.example')` selects all elements with class 'example' and returns them in a NodeList.

3. What is setTimeout?
   - **JavaScript Function**: Delays execution of a function or code block for a specified time interval.
   - **Single Execution**: Executes the function or code block once after the specified delay.
   - **Delay Control**: Time delay specified in milliseconds.
   - **Example**:
     ```js
        setTimeout(function() {
           console.log('Hello');
        }, 1000)
      ```
      prints 'Hello' to the console after a 1-second delay.

### Grading Quiz Week 3

1. What is async-await and how does it work?
   - **JavaScript Feature**: Asynchronous programming technique for handling promises more elegantly.
   - **Syntax**: Functions marked with `async` keyword can use `await` to pause execution until promises resolve.
   - **Error Handling**: Simplifies error handling with traditional try-catch blocks.
   - **Sequential Code**: Allows writing asynchronous code that looks synchronous, improving readability.
   - **Example**:
     ```js
        async function fetchData() {
           try {
              const data = await fetch(url); console.log(data);
           } catch(error) {
              console.error('Error fetching data:', error);
           }
        }
     ```
2. What is a promise and what is its type?

   - **Asynchronous Operation**: A JavaScript object representing the eventual completion or failure of an asynchronous operation.
   - **States/Types**: Can be in one of three states: pending, fulfilled, or rejected.

     - Types of a Promise

       1. **Pending**: Initial state, neither fulfilled nor rejected.
       2. **Fulfilled**: Operation completed successfully, resulting in a resolved value.
       3. **Rejected**: Operation failed, resulting in a reason for rejection.

     - Examples
       - **Pending**: A promise returned from an asynchronous operation that has not yet completed.
       - **Fulfilled**: A promise that successfully fetched data from an API.
       - **Rejected**: A promise that encountered an error while trying to fetch data, such as a network error.

   - **Chaining**: Supports chaining multiple asynchronous operations together using `then` and `catch` methods.
   - **Error Handling**: Allows handling errors in asynchronous operations gracefully using `catch`.
   - **Example**: Fetching data from an API returns a Promise, which resolves with the fetched data or rejects with an error.
     ```js
        function fetchData(var) {
           return new Promise(resolve, reject){
              if(var === 'pass'){
                  resolve('conditioned passed')
              }else{
                 reject('conditioned failed')
              }
           }
        }

        fetchData('pass')
           .then((data)=>{
              console.log(data) // condition passed
              })
           .catch((error)=>{
              console.log(error)
              })
           .finally(()=>{
              console.log("Fetch operation completed.")
           })
     ```

3. What is the difference between Synchronous and Asynchronous functions?

   - Synchronous Functions

     - **Sequential Execution**: Executes tasks one at a time, blocking further execution until each task completes.
     - **Blocking**: Holds up the program's execution flow, waiting for the current operation to finish.
     - **Example**: Reading a file synchronously, where the program waits until the file is fully read before moving to the next line of code.
       ```js
       // Synchronous function to calculate the square of a number
         function calculateSquare(number) {
           return number * number;
         }
       console.log("Start");
       calculateSquare(5);
       console.log("End");

         // Start
         // 25
         // End
       ```

   - Asynchronous Functions
     - **Concurrent Execution**: Executes tasks without waiting for each to complete, allowing other operations to run simultaneously.
     - **Non-blocking**: Frees up the program to continue running other tasks while waiting for an asynchronous operation to complete.
     - **Example**: Fetching data from an API asynchronously, where the program continues executing other tasks while waiting for the API response.
      ```js
      // Asynchronous function to simulate a delayed operation
         function delayedOperation() {
           console.log("Start");

           setTimeout(() => {
             console.log("Operation completed after 2 seconds");
           }, 2000);

           console.log("End");
         }

         delayedOperation();
      // Start
      // End
      // Operation completed after 2 seconds
      ```

4. What are the different ways of fetching data?

   1. **XMLHttpRequest (XHR)**

      - **What it is**: A legacy JavaScript object used to interact with servers and fetch data.
      - **Pros**:
        - Widely supported in all browsers.
        - Allows fine-grained control over request and response.
      - **Cons**:
        - Verbose and complex syntax.
        - Requires manual handling of promises and JSON parsing.
      - **Example**: Creating an `XMLHttpRequest` object, configuring it, and sending the request.

   2. **Fetch API**

      - **What it is**: A modern JavaScript API for making HTTP requests, returning promises for easier asynchronous operations.
      - **Pros**:
        - Modern and clean syntax.
        - Returns promises, making it easier to work with asynchronous operations.
      - **Cons**:
        - Not supported in some older browsers without polyfills.
        - Less control over request details compared to XHR.
      - **Example**: Using `fetch(url).then(response => response.json()).then(data => console.log(data))`.

   3. **Axios**

      - **What it is**: A third-party JavaScript library for making HTTP requests, providing a simpler and more feature-rich API.
      - **Pros**:
        - Simple and concise syntax.
        - Automatically handles JSON data and supports older browsers.
      - **Cons**:
        - Requires adding an external library.
        - Slightly larger footprint than using native APIs.
      - **Example**: `axios.get(url).then(response => console.log(response.data))`.

   4. **jQuery AJAX**
      - **What it is**: A jQuery method for making AJAX requests, simplifying the process of fetching data.
      - **Pros**:
        - Simplifies AJAX calls with jQuery.
        - Supports older browsers.
      - **Cons**:
        - Requires jQuery library, adding to the page size.
        - Overkill if jQuery is not already being used in the project.
      - **Example**: `$.ajax({ url: url, success: function(data) { console.log(data); } })`.

   5. Long examples: [https://docs.google.com/document/d/13S5N8m5KZiN6KUxzKfHGk98HDkt0P5qb7TrR5VWH5ZU/edit](https://docs.google.com/document/d/13S5N8m5KZiN6KUxzKfHGk98HDkt0P5qb7TrR5VWH5ZU/edit)

5. Define Callback Hell in Javascript.
   - **Nested Callbacks**: Occurs when multiple asynchronous operations are nested inside each other.
   - **Unreadable Code**: Leads to deeply nested code, making it hard to read and maintain.
   - **Difficult Debugging**: Errors and debugging become challenging due to complex nested structures.
   - **Scalability Issues**: Difficult to manage and scale as the number of nested callbacks increases.
   - **Example**: Fetching data from an API, processing it, and then saving it, all using nested callbacks, results in a pyramid-like structure of code, making it hard to follow and maintain.
   - example: [https://docs.google.com/document/d/1Qw3EpHusiqSQzS5Il3U56wDQDfsFmpEd2PuoClPVT0A/edit](https://docs.google.com/document/d/1Qw3EpHusiqSQzS5Il3U56wDQDfsFmpEd2PuoClPVT0A/edit)
6. What is asynchronous JavaScript?
   - **Concurrent Execution**: Allows code to execute without waiting for previous operations to complete.
   - **Non-blocking**: Frees the program to continue running other tasks while waiting for an operation to finish.
   - **Techniques**: Uses callbacks, Promises, async-await for handling asynchronous operations.
   - **Improves Performance**: Enhances responsiveness and performance, especially in I/O-bound operations like network requests.
   - **Example**: Fetching data from an API without freezing the user interface, allowing other interactions to continue while waiting for the data to arrive.
7. What is async API?
   - **Definition**: A set of functions or endpoints designed to handle asynchronous operations.
   - **Non-blocking**: Executes tasks concurrently without waiting for each task to complete before starting the next one.
   - **Techniques**: Utilizes callbacks, Promises, and async-await for asynchronous data handling.
   - **Improves Performance**: Enhances the efficiency of applications by allowing multiple operations to run simultaneously.
   - **Example**: An API endpoint for fetching user data that returns a Promise, enabling the application to continue running other tasks while waiting for the data to be retrieved.
8. What is fetch API in Javascript? How does it handle JSON responses?

   - Fetch API in JavaScript

     - **Definition**: A modern, built-in JavaScript API for making HTTP requests.
     - **Promise-Based**: Returns a Promise, simplifying asynchronous request handling.
     - **Readable Syntax**: Offers a clean and concise syntax compared to XMLHttpRequest.
     - **JSON Handling**: Easily handles JSON responses with built-in methods.
     - **Example**: Fetching data from an API using `fetch(url).then(response => response.json()).then(data => console.log(data))`, which retrieves and logs the JSON data from the specified URL.

   - Handling JSON Responses in Fetch API

     - **Response Object**: Fetch API's `response.json()` method parses the response body as JSON.
     - **Returns Promise**: `response.json()` returns a Promise containing the parsed JSON data.
     - **Asynchronous Parsing**: Parsing occurs asynchronously, allowing other operations to continue.
     - **Example**: `fetch(url).then(response => response.json()).then(data => console.log(data))` fetches data from the specified URL, parses the JSON response asynchronously, and logs the data to the console when resolved.

9. What is an API and different rest methods we use?

   - API (Application Programming Interface)

     - **Definition**: A set of rules, protocols, and tools that allows different software applications to communicate with each other.
     - **Functionality**: Defines how software components should interact, facilitating data exchange and functionality sharing.
     - **Types**: Includes web APIs for accessing web services, operating system APIs for accessing system resources, and library APIs for accessing specific functionalities.
     - **Examples**:
       - Web APIs like Twitter API for fetching tweets.
       - Operating system APIs like Windows API for managing system resources.
       - Library APIs like jQuery API for DOM manipulation in JavaScript.

   - Different REST Methods

     1. **GET**:

        - Retrieves data from a server, typically used for fetching resources.
        - Example: Fetching user details from an API.

     2. **POST**:

        - Submits data to a server to create new resources or update existing ones.
        - Example: Submitting a form to add a new user to a database.

     3. **PUT**:

        - Updates existing data on a server, replacing it with the provided data.
        - Example: Updating user information with new details.

     4. **DELETE**:
        - Removes data from a server.
        - Example: Deleting a user account from a database.

10. Can you explain the difference between a REST and SOAP API?
    - **Definition**: 
        - **REST**: Representational State Transfer (REST) API is a software architectural style for designing networked applications.
        - **SOAP**: Simple Object Access Protocol (SOAP) API is a protocol for exchanging structured information in web services.

    - **Communication Protocol**:
        - **REST**: Uses HTTP protocol for communication, making it lightweight and scalable.
        - **SOAP**: Relies on XML messaging format over various protocols like HTTP, SMTP, or TCP.

    - **Data Format**:
        - **REST**: Typically uses JSON or XML for data exchange.
        - **SOAP**: Exchanges XML messages exclusively.

    - **Statelessness**:
        - **REST**: Stateless architecture, each request is independent and contains all necessary information.
        - **SOAP**: Supports stateful communication, maintaining session information between requests.

    - **Example**:
        - **REST**: Twitter API for fetching tweets using HTTP GET requests.
        - **SOAP**: PayPal SOAP API for processing payments using XML messages over HTTP.

   - Examples for both: [https://docs.google.com/document/d/165DhIIHWkHZPwOtH3NxlSNkunZDk9eZqwud-JzlN2hY/edit](https://docs.google.com/document/d/165DhIIHWkHZPwOtH3NxlSNkunZDk9eZqwud-JzlN2hY/edit)
11. What are REST APIs and why are they so popular?
    - **Definition**: Representational State Transfer (REST) APIs are a type of web service that adhere to REST architectural principles.
    - **Stateless Communication**: Requests are independent and contain all necessary information for processing.
    - **Resource-Based**: Manipulate resources using standard HTTP methods (GET, POST, PUT, DELETE).
    - **Lightweight**: Uses JSON or XML for data exchange, making it efficient and scalable.
    - **Popular**: Widely adopted due to simplicity, flexibility, and compatibility with HTTP.
    - **Examples**: Twitter API for fetching tweets, Google Maps API for geolocation services, and GitHub API for repository management.
