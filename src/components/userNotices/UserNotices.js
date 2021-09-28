import React, { useEffect, useState } from 'react';
import {Container} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Button, ButtonGroup} from 'react-bootstrap';
import "./UserNotices.css"
import {UserService} from '../../Services/user.service';
import axios from 'axios';
import Swal from 'sweetalert2';
import CONSTANTS from '../../Services/constants';

const UserNotices = () => {



    return (
        <h1>User Notices</h1>
    );
}

export default UserNotices;