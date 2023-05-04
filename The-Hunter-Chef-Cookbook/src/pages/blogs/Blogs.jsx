/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../shared/header/Header';

const Blogs = () => {
    return (
        <div>
            
            <h2>ques: differences between uncontrolled and controlled components</h2>
            <p>ans:Controlled Components
is in the controlled component the form input element’s values and mutations are totally driven by event handlers and the value of the input element is always inferred from the state.The text input has the value attribute set as the components state ‘text’. This is very important so that the input component’s value will always be in sync with the components state ‘text’ s value.Secondly, we are handling the change event emitted by the input element whenever a user tries to update the input elements value. Inside the handler function, we are mutating the ‘text ’state with the updated input value. </p>
<h2>ques: How to validate React props using PropTypes</h2>
<p>ans: We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.With React props, you can send data to a component when you call on that component, including numbers, strings, functions, objects, and arrays. If you have multiple components, you can pass data from one component to another.

To pass props between components, you can add them when the component is called, just like you would pass arguments when calling on a regular JavaScript function.

</p>
<h2>ques: difference between nodejs and express js</h2>
<p>ans: Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.Building Block : Expressjs is built on Node.js.	Nodejs built on Google’s V8 engine.In expressjs routing is provided.but in nodejs routing is not provided.In expressjs Uses middleware for the arrangement of functions systematically server-side.but in nodejs its not use  use such a provision.Framework/Platform	Framework based on Node.js.	Run-time platform or environment designed for server-side execution of JavaScript.</p>
<h2>ques: What is a custom hook, and why will you create a custom hook?</h2>
<p>ans: Custom React JS hooks offer three major benefits over standard library hooks: Reusability, readability, and testability.Generally, the test containers and the presentational components are tested separately in React. This is not a trouble when it comes to unit tests. But, if a container contains several HOCs, it becomes difficult as you will have to test the containers and the components together to do the integration tests.Instead of using High-Order Components (HOCs), one can use custom hooks to improve the readability of the code. Complex codes can become hard to read if layers of providers surround the components, consumers, HOCs, render props, and other abstractions, generally known as wrapper hell.Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.Custom React JS hooks can help developers save time, are reliable, reusable, and make the code clean. Creating custom React JS hooks is relatively easy, and you can search for many open sources where you can get some custom hooks from the library already created by developers. </p>
        </div>
    );
};

export default Blogs;