import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import AuthService from '../../services/AuthService';
import './ForgotPassword.css';

class ForgotPassword extends Component {
    render() {
        if (AuthService.isAuthenticated()) {
            return (
                <Redirect to={"/home"}/>
            );
        }
        return (
            <div className="ForgotPassword">
                <p>
                    ForgotPassword
                </p>
                <form>
                    <fieldset>
                        <label>ForgotPassword</label>
                        <input name="login" id="login"/>
                    </fieldset>
                    <fieldset>
                        <label>Password</label>
                        <input type="password" name="password" id="password"/>
                    </fieldset>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export default ForgotPassword; 