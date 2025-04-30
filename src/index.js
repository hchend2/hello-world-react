import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
// import { useRef } from "react";


// This code imports the necessary libraries and components to create a React application.
// It imports React and ReactDOM for rendering the application, and the App component which contains the main application logic.
// It then uses ReactDOM to create a root element and render the App component into the HTML element with the ID "root".
// The App component is the main entry point of the application and contains the routing logic.

// const myRef = useRef(null); // This is now correct

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>);
// This code sets up a simple React application with routing using React Router.