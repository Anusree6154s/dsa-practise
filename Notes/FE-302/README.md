## Tailwind

- Css has issues like:
  - Overwriting styles due to specificity
  - Problems navigating multiple files
  - complicated and redundant selectors when the project grows

## NextJS

### Client-Side Rendering (CSR)

Client-Side Rendering (CSR) is a web development technique where the browser uses HTML, CSS, JavaScript to generate and display the content of a webpage, rather than the server sending a fully-rendered page.

### Server Side Rendering (SSR)

- The server itself generates html content.
- It sends the fully rendered page to the browser at once.

|                        | Client Side Rendering (CSR)                                                                       | Server Side Rendering (SSR)            |
| ---------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Rendering Process      | CSR renders pages on client side, the browser.                                                    | SSR renders pages on the server itself |
| Initial Page Load Time | Slow                                                                                              | Fast                                   |
| Server Load            | CSR minimizes server load, as most of the processing happens on the client side (browser itself). | Server load is high comparable to CSR. |

### Creating NextJS App
- [Getting started](https://nextjs.org/docs/getting-started/installation)
- All the components in next.js are server components by default
Server components are rendered and executed on the server.
It cannot access any browser-specific APIs, such as the (DOM), local storage, or handling user interactions like clicks or keyboard events.
Server components can't access the client environment (browser) where user interactions occur.

