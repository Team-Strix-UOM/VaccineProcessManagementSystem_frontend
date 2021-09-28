import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../assests/Logo.png"

import './Header.css';

const Header = () => {
  const clickRegister = (event) => {
    window.location.href = `/users/register`;
}

const clickAdmin = (event) => {
    window.location.href = `/admin`;
}

const clickAbout = (event) => {
  window.location.href = `/about`;
}

const clickNews = (event) => {
    window.location.href = `/news`;
}
  return (
    <Navbar bg="dark" variant="dark">
      <div class="col-1">
      <img className="headerlogo" src={logo} alt="" />
        </div>
        <div class="col-3">
        <Nav.Link as={Link} to="/" className="links">Vaccine Process Management System</Nav.Link>
        </div>
        <div class="col-3">
        </div>
        <div class="col-5">
    <button type="button" class="btn btn-outline-primary btn-lg" onClick={clickRegister}>Register</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-outline-primary btn-lg" onClick={clickNews}>News</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-outline-primary btn-lg">Login</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-outline-primary btn-lg">Signup</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-outline-primary btn-lg"onClick={clickAbout}>About Us</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" class="btn btn-outline-primary btn-lg"onClick={clickAdmin}>Admin</button>
    </div>
    </Navbar>
  );
}

export default Header;
