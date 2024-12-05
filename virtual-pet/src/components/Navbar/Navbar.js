import React from "react";
import "./Navbar.css";
import feather from "feather-icons";

const Navbar = () => {
  React.useEffect(() => {
    feather.replace(); // Initializes feather icons
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="/home" className="navbar__link">
            <i data-feather="home"></i>
            <span>Home</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="/home" className="navbar__link">
            <i data-feather="message-square"></i>
            <span>Messages</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="/home" className="navbar__link">
            <i data-feather="users"></i>
            <span>Customers</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="/home" className="navbar__link">
            <i data-feather="folder"></i>
            <span>Projects</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="/home" className="navbar__link">
            <i data-feather="archive"></i>
            <span>Resources</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="/home" className="navbar__link">
            <i data-feather="help-circle"></i>
            <span>Help</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="/home" className="navbar__link">
            <i data-feather="settings"></i>
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
