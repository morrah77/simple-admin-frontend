import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ApiService from '../../../services/ApiService';
import ErrorMessage from '../../common/errormessage/ErrorMessage'
import './List.css';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        ApiService.fetch("/user/list")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        items: result.data,
                        error: null
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error: error.message
                    });
                }
            );
    }
    render() {
        return (
            <div className="Users">
                <ErrorMessage error={this.state.error}/>
                <h2>Users</h2>
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.name}>
                            <Link to={`${this.props.match.url}/${item.id}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
