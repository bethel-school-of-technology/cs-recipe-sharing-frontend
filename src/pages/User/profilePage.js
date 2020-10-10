import React, { useState } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router';
import FontAwesome from 'react-fontawesome';
import authService from '../../services/auth.service';
import Card from 'react-bootstrap/Card';
import Recipe from '../Recipes/Recipes';


       const profilePage = () => { 
        let currentUser = authService.getCurrentUser();
        

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
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>{Recipe.currentUser}</Card.Title>
                        <Card.Text>
                            Here is an example of your Recipe.
                        </Card.Text>
                    </Card.Body> 
                   
                <button onClick = { authService.logout } > Logout </button>
                </div>
                
                    
                
                 );
                }

            export default withRouter(profilePage);