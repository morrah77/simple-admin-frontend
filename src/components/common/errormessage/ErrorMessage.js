import React, { Component } from 'react';
import './ErrorMessage.css'

export default class ErrorMessage extends Component {
    render() {
        if (this.props.error) {
            return (
                <div className="ErrorMessage">
                    {this.props.error}
                </div>
            );
        }
        return null;
    }
}
