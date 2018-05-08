import React, { Component } from 'react';
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
        ApiService.fetch("/subscription/list")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
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
            <div className="Subscriptions">
                <ErrorMessage error={this.state.error}/>
                <h2>Subscriptions</h2>
                <ul>
                    {this.state.items.map(item =>
                        (<li key={item.name}>
                            {item.name} {item.startDate} {item.endDate}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
