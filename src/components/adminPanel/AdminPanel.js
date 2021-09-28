import React, {Fragment,useEffect, useState } from 'react';
import { Button, ButtonGroup} from 'react-bootstrap';
import axios from "axios";
import users from "../../Sampledata";
import './AdminPanel.css';
import CONSTANTS from '../../Services/constants';
import Swal from 'sweetalert2'

const AdminPanel = () => {

        
        return (
            <Fragment>
                <h1>ADMIN PANEL</h1>

<hr/>
<Button
                variant="secondary">Edit</Button>
                
            </Fragment>

        );
}

export default AdminPanel;