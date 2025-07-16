//
// File: ../hello-world-react/src/App.js
//
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutPage from './LayoutPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// This code sets up a React application with routing using React Router.
// It imports the necessary components and libraries, including BrowserRouter, Routes, and Route from 'react-router-dom'.
// It defines the main App component, which uses BrowserRouter to wrap the Routes.
// Inside the Routes, it defines a Route for the root path ("/") that renders the LayoutPage component.
// It also defines a nested Route for the "about" path that renders the AboutPage component.
// The LayoutPage component serves as a layout for the application, while the HomePage and AboutPage components represent different pages in the application.
// The App component is the main entry point of the application and contains the routing logic.
// The code also imports the necessary CSS file for styling the application.
// The LayoutPage component is responsible for rendering the layout of the application, including the navigation and any common elements.
// The HomePage and AboutPage components represent different pages in the application.
// The HomePage component is rendered when the user navigates to the root path ("/"), while the AboutPage component is rendered when the user navigates to the "about" path.

