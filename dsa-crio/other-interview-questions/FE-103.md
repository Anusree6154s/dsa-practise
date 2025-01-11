## Interview Questions

- [my own answers](https://docs.google.com/document/d/11dg2QV8ev8at5TvSK199dvA6DQApNG0501rnvAwmwtA/edit?tab=t.gei4ufz2he0n)
### Grading Quiz (Video) 3 FE-103 Week 1

1. What are Event Listeners?
2. What is an event loop? How does JavaScript event loop work and how does it contribute to the language's asynchronous nature? Can you explain the concept of the call stack and the message queue in this context?
3. How to console params and query in JavaScript?
4. What is Event Bubbling in JavaScript?
5. Describe Web Storage.
6. What are cookies and how are they used?
7. Explain the differences between localStorage and Session Storage.

## Answers

### Grading Quiz (Video) 3 FE-103 Week 1

1. What are Event Listeners?
   - **Definition**: JavaScript functions that wait for and respond to specific events triggered by user actions or browser events.
   - **Event Binding**: Attaches functions to DOM elements, executing them when events occur.
   - **Types**: Include click, mouseover, submit, keyup, etc., covering various user interactions.
   - **Dynamic Interaction**: Allows interactive and dynamic web experiences by responding to user actions.
   - **Example**: Adding a click event listener to a button to perform an action when clicked, like submitting a form or toggling a menu.
2. What is an event loop? How does JavaScript event loop work and how does it contribute to the language's asynchronous nature? Can you explain the concept of the call stack and the message queue in this context?

   - Event Loop and its working
     - **Definition**: Mechanism in JavaScript that manages the execution of asynchronous tasks and callbacks.
     - **Single Threaded**: JavaScript is single-threaded, meaning it can only execute one task at a time.
     - **Non-blocking**: Allows asynchronous operations to run without blocking the main thread.
     - **Event Loop Working**: Continuously checks the call stack and event queue, moving tasks from the queue to the stack when it's empty.
     - **Event Queue**: Holds tasks and callbacks, processed in a sequential order.
     - **Example**: Handles tasks like fetching data from an API, DOM events, and timers, ensuring smooth execution and responsiveness in web applications.
   - Call Stack

     - **Stack Data Structure**: Stores function calls in a Last-In-First-Out (LIFO) order.
     - **Execution Context**: Keeps track of the currently executing function or task.
     - **Push and Pop Operations**: Functions are pushed onto the stack when called and popped off when completed.
     - **Synchronous Execution**: JavaScript executes tasks in the call stack sequentially.
     - **Example**: When a function is called, it's added to the top of the stack. As it completes execution, it's removed from the stack, allowing the next function in line to execute.

   - Message Queue

     - **FIFO Data Structure**: Stores messages or tasks in a First-In-First-Out (FIFO) order.
     - **Asynchronous Tasks**: Holds tasks waiting to be processed by the event loop.
     - **Event-Driven Environment**: Contains events like timer callbacks and I/O events.
     - **Ordered Execution**: Tasks are processed sequentially by the event loop.
     - **Example**: Timer callbacks, DOM events, and asynchronous operations like fetching data from an API are queued in the message queue, waiting for the event loop to process them.

3. How to console params and query in JavaScript?

   1. **Extract Search Parameters**: Use the URLSearchParams API to parse search parameters from the URL.

   - Example: `const params = new URLSearchParams(window.location.search);`

   2. **Access Query Parameters**: Use the `get()` method to retrieve specific query parameter values.

   - Example: `const id = params.get('id');`

   3. **Log to Console**: Print the parameter values to the console for debugging or further processing.

   - Example: `console.log(id);`

4. What is Event Bubbling in JavaScript?
   - **Propagation Mechanism**: When an event occurs on a DOM element, it triggers that event on its parent elements, propagating upwards through the DOM tree.
   - **Bubble Up**: Events bubble up from the target element through its ancestors, triggering their event listeners if present.
   - **Default Behavior**: By default, most events bubble, but some can be stopped from propagating using `stopPropagation()`.
   - **Example**: A click event on a button triggers click events on its parent elements, such as the button's container or the document body, if they have click event listeners attached.
5. Describe Web Storage.

   - **Client-Side Storage**: Provides a way to store key-value pairs locally in the user's browser.
   - **Two Types**: localStorage and sessionStorage.
   - **localStorage**: Persistent storage that persists even after the browser is closed.
   - **sessionStorage**: Temporary storage that lasts only for the duration of the session.
   - **Limitations**: Both have a storage limit of around 5-10MB per domain.
   - **Example**: Storing user preferences, authentication tokens, and cached data to enhance the user experience across sessions without server interaction.
   - Examples of Web Storage Types:

     1. **localStorage**:

     - Storing user preferences such as theme settings or language preferences.
     - Saving user-generated content like drafts or form data.
     - Caching static assets such as images or CSS files for faster loading on subsequent visits.

     2. **sessionStorage**:

     - Storing temporary data like shopping cart items during a user's session.
     - Managing authentication tokens or user credentials for secure login sessions.
     - Storing transient data for multi-step processes like a checkout flow or form submission.

6. What are cookies and how are they used?

   - **Definition**: Small pieces of data stored in the user's browser by websites.
   - **Usage**: Used for tracking user behavior, session management, personalization, and authentication.
   - **Attributes**: Can have attributes like expiration date, domain, path, and secure flag.
   - **Limitations**: Limited storage capacity (typically 4KB per cookie) and can be subject to security concerns like CSRF attacks.
   - **Example**: Storing user authentication tokens for automatic login on subsequent visits or tracking user activity for analytics purposes.

7. Explain the differences between localStorage and Session Storage.

   - **Definitions**:

     - **localStorage**:
     - A web storage mechanism that allows data to be stored in the browser with no expiration date. It persists even after the browser is closed and across browser sessions. The data stored in localStorage remains until explicitly deleted or cleared.

     - **sessionStorage**:
     - Another web storage mechanism similar to localStorage, but with the key difference that sessionStorage data is cleared when the browsing session ends. It provides temporary storage for data that should be retained only for the duration of the page session.

   - **Persistence**:

     - **localStorage**: Persistent storage, data remains even after closing the browser.
     - **sessionStorage**: Temporary storage, data is cleared when the browser session ends.

   - **Scope**:

     - **localStorage**: Shared across tabs and windows within the same origin.
     - **sessionStorage**: Isolated to the specific tab or window that created it.

   - **Usage**:

     - **localStorage**: Suitable for long-term data storage, like user preferences.
     - **sessionStorage**: Ideal for transient data storage, like session tokens or form data during a session.

   - **Example**:
     - **localStorage**: Storing user settings like theme preferences.
     - **sessionStorage**: Holding shopping cart items during a user's session.
