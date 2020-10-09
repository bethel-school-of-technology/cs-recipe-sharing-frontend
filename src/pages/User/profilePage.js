import React, { useState } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router';
import AuthService from '../../services/auth.service';
import FontAwesome from 'react-fontawesome';
import authService from '../../services/auth.service';
import { render } from '@testing-library/react';

       const profilePage = () => { 
        let currentUser = AuthService.getCurrentUser();
        

        console.log(currentUser);



           const SearchBarComponent = ({handleSearch}) => {
                return(
                    <div className="search-bar">
                        Search for Recipe: &nbsp;<input onChange={handleSearch} type="text" />
                        < div className="search-icon" name="search" />
                    </div>
                )
            };
                 return(
                    <div>
                <button onClick = { authService.logout } > Logout </button>
                
                    
                </div>
                 );
                }

            export default withRouter(profilePage);