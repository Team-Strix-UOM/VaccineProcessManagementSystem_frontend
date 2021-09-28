import React, { useState, useEffect } from "react";
import './Footer.css';
import logo from "../../assests/Logo.png"
import { Navbar, Container, Col } from "react-bootstrap";

const Footer = () => {
    const [fullYear, setFullYear] = useState();

    useEffect(() => {
        setFullYear(new Date().getFullYear());
    }, [fullYear]);

    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
<div class="col-4">
      <img className="footerlogo" src={logo} alt="" />
    </div>
    <div class="col-8">
     News
    </div>
            </Container>
        </Navbar>
    );
};

export default Footer;