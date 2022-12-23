Hello, This is my first Program in NodeJS


This class creates stores that stay coherent through asynchronous operations.

While you can create your own implementation on top of the node:async_hooks module, AsyncLocalStorage should be preferred as it is a performant and memory safe implementation that involves significant optimizations that are non-obvious to implement.

The following example uses AsyncLocalStorage to build a simple logger that assigns IDs to incoming HTTP requests and includes them in messages logged within each request.