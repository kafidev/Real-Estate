import "./navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a className="logo" href="/">
          <img src="/logo.png" alt="" />
          <span>HooGeey</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
      {/* right side of the navbar */}
      <div className="right">
        <a href="/login">Login</a>
        <a className="register" href="/register">
          Register
        </a>
        {/* menu */}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
