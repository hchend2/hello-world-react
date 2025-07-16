//
// File: ../hello-world-react/src/LayoutPage.js
//
import { Link, Outlet } from 'react-router-dom';
import './App.css';

export default function LayoutPage() {
  return (
    <div className="layout">
      <header className="header">
        <h1>Hello, From React App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2025 Hello World Inc.</p>
      </footer>
    </div>
  );
}

// This code defines a layout component for a React application using React Router.
// The LayoutPage component includes a header with navigation links to the Home and About pages.
// The Outlet component is used to render the child routes defined in the routing configuration.