import Axios from 'axios';
import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import axios from 'axios';
import { render } from '@testing-library/react';


useEffect(() => {
            const loggedInUser = localStorage.getItem("user");
            if (loggedInUser) {
                const foundUser = JSON.parse(loggedInUser);
                setUser(foundUser);
            }


            const handleLogout = () => {
                setUserName({});
                setPassword("");
                localStorage.clear();
            };




            render() { <
                button onClick = { handleLogout } > Logout < /button>

            }
            export default (profilePage);