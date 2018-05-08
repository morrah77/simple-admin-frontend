import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import AuthService from '../../services/AuthService';
import ApiService from '../../services/ApiService';
import './Login.css';

class Login extends Component {
    login() {
        ApiService.fetch(
            '/auth/login',
            {
                method: 'POST',
                body: JSON.stringify({
                    login:
                })
            }
        )
    }
    render() {
        if (AuthService.isAuthenticated()) {
            return (
                <Redirect to={"/home"}/>
            );
        }
        return (
            <div className="Login">
                <p>
                    Login
                </p>
                <form>
                    <fieldset>
                        <label>Login</label>
                        <input name="login" id="login"/>
                    </fieldset>
                    <fieldset>
                        <label>Password</label>
                        <input type="password" name="password" id="password"/>
                    </fieldset>
                    <input type="submit" value="submit" onClick={this.login}/>
                </form>
            </div>
        );
    }
}

export default Login;