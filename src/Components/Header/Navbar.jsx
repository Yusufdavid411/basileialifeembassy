import { useState } from "react";
import "./header.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Hamburger Menu Button */}
      <div className="menu-icon" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      {/* Full-Screen Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* Close Button */}
        <div className="close-btn" onClick={() => setMenuOpen(false)}>✖</div>

        {/* Menu Items */}
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">Discover Us</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Our Webtree</a></li>
          <li><a href="#">Our Channeltree</a></li>
          <li><a href="#">Give To Us Today</a></li>
        </ul>
      </div>

      <div className="tablet-menu">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">Discover Us</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Our Webtree</a></li>
          <li><a href="#">Our Channeltree</a></li>
          <li><a href="#">Give To Us Today</a></li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
