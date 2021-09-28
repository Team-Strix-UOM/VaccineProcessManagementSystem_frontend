import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button,Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import Swal from 'sweetalert2';
import './Welcome.css';
import Footer from '../footer/Footer'
import CONSTANTS from '../../Services/constants';

const Welcome = () => {

    const [style, setstyle] = useState(CONSTANTS.WelcomeStyles)


    const clickRegister = (event) => {
        window.location.href = `/users/register`;
    }

    const clickNotices = (event) => {
        window.location.href = `/1`;
    }

    const clickNews = (event) => {
        window.location.href = `/news`;
    }
   
    return (
        <div>
        <Form className="WelcomeBanner">
            <div style={style.Banner}>
            <Row>
            <div class="col-4"> </div>
            <div class="col-8">
            <br/>
            <button type="button" class="btn btn-primary btn-xl"  onClick={clickRegister}>Register for vaccine</button>
            <br/><br/>
            <button type="button" class="btn btn-primary btn-xl" onClick={clickNotices}>Your Notices</button>
            <br/><br/>
            <button type="button" class="btn btn-primary btn-xl" onClick={clickNews}>News Feed</button>
            <br/><br/>
            </div>
            </Row>
            <Row>
            
                <div style={style.Txt1}>Welcome!!</div>
                <div style={style.Txt2}>to<br/>Vaccine Process Management System</div>
                </Row>
            </div>
        </Form>
        <div className="welcomefooter">
        <Footer/>
        </div>
        </div>
    );
}

export default Welcome;
