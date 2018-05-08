import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import AuthService from '../../services/AuthService';
import './Logout.css';

class Logout extends Component {
    render() {
        if (AuthService.isAuthenticated()) {
            return (
                <Redirect to={"/home"}/>
            );
        }
        return (
            <div className="Logout">
                <p>
                    Logout
                </p>
            </div>
        );
    }
}

export default Logout;