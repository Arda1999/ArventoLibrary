import React from "react";
import "./Navbar.css";
const NavBar = () => {
  return (
    <nav className="app-bar">
      <div className="nav-content">
        <div className="logo">
          <a href="/Dashboard">Stok Uygulaması</a>
        </div>

        <ul className="nav-links">
          <li>
            <a href="/Kitaplar">Kitaplar</a>
          </li>
          <li>
            <a href="/Yazarlar">Yazarlar</a>
          </li>
          <li>
            <a href="/?">Çıkış Yap</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
