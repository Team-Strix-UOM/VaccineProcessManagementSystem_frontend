import React from 'react';
import { Route } from 'react-router-dom';

import UserNotices from '../userNotices/UserNotices';
import Welcome from '../welcome/Welcome';
import NewsFeed from '../newsFeed/NewsFeed';
import UserRegister from '../addUserDetails/AddUserDetails';
import AdminPanel from '../adminPanel/AdminPanel';
import AboutUS from '../aboutUs/AboutUs';
import './Routes.css';

const FormContainer = () => {
    return (
        <div className="FormStyles">
                <Route path="/" exact component={Welcome} />
                <Route path="/usernotice/:id" exact component={UserNotices} />
                <Route path="/users/register" exact component={UserRegister} />
                <Route path="/news" exact component={NewsFeed} />
                <Route path="/admin" exact component={AdminPanel} />
                <Route path="/about" exact component={AboutUS} />
        </div>
    );
}

export default FormContainer;