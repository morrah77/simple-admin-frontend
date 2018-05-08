import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AuthService from '../../../services/AuthService';
import './Header.css'

export default class Header extends Component {
    AuthControl() {
        if (AuthService.isAuthenticated()) {
            return (
                <Link to={"/logout"}>Log out</Link>
            );
        }
        return (
            <Link to={"/login"}>Log in</Link>
        );
    }

    render() {
        return (
        <header className="Header">
            <h1 className="Header-title">Simple Admin</h1>
            <div className="AuthControl">
                <AuthControl/>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/user">Users</Link>
                </li>
                <li>
                    <Link to="/subscription">Subscriptions</Link>
                </li>
            </ul>
        </header>
        );
    }
}