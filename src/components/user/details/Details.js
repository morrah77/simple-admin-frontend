import React, { Component } from 'react';
import ApiService from '../../../services/ApiService';
import ErrorMessage from '../../common/errormessage/ErrorMessage'
import './Details.css';

export class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: {},
            availableSubscriptions: [],
            isAvailableSubscriptionsVisible: false
        };
        this.AvailableSubscriptionList = this.AvailableSubscriptionList.bind(this);
        this.SubscriptionList = this.SubscriptionList.bind(this);
        this.addSubscription = this.addSubscription.bind(this)
        this.removeSubscription = this.removeSubscription.bind(this)
        this.getAvailableSubscriptions = this.getAvailableSubscriptions.bind(this)
        this.showAvailableSubscriptions = this.showAvailableSubscriptions.bind(this);
        this.hideAvailableSubscriptions = this.hideAvailableSubscriptions.bind(this);
    }
    componentDidMount() {
        ApiService.fetch(`/user/details/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: result,
                        error: null
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error.message
                    });
                }
            )
    }
    showAvailableSubscriptions() {
        this.setState(
            {
                isAvailableSubscriptionsVisible: true
            });
        if(!this.state.availableSubscriptions.length) {
            this.getAvailableSubscriptions();
        }
    }
    hideAvailableSubscriptions() {
        this.setState(
            {
                isAvailableSubscriptionsVisible: false
            });
    }
    addSubscription(id) {
        this.hideAvailableSubscriptions();
        ApiService.fetch("/user/subscription/add",
            {
                method: 'POST',
                body: JSON.stringify({
                    userId: `${this.state.item.id}`,
                    subscriptionId: id
                })
            })
            .then(res => res.json())
            .then(result => {
                    const item = this.state.item
                    item.subscriptions = result.data;
                    this.setState({
                        item,
                        error: null
                    })
                },
                error => {
                    this.setState({
                        error: error.message
                    })
                }
            );
    }
    removeSubscription(id) {
        ApiService.fetch("/user/subscription/remove",
            {
                method: 'POST',
                body: JSON.stringify({
                    userId: `${this.state.item.id}`,
                    subscriptionId: id
                })
            })
            .then(res => res.json())
            .then(result => {
                    const item = this.state.item
                    item.subscriptions = result.data;
                    this.setState({
                        item,
                        error: null
                    })
                },
                error => {
                    this.setState({
                        error: error.message
                    })
                }
            );
    }
    getAvailableSubscriptions() {
        ApiService.fetch("/subscription/list")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        availableSubscriptions: result.data,
                        error: null
                    });
                },
                error => {
                    this.setState({
                        availableSubscriptions: [],
                        error: error.message
                    });
                }
            );
    }
    AvailableSubscriptionList() {
        if(this.state.isAvailableSubscriptionsVisible) {
            return (
                <div className="Overlay">
                    <div className="container">
                        <button className="CloseButton" onClick={() => this.hideAvailableSubscriptions()}>Close</button>
                        <ul>
                            {this.state.availableSubscriptions.map(item => (
                                <li key={item.name}>
                                    {item.name} {item.startDate} {item.endDate}
                                    <button onClick={() => this.addSubscription(item.id)}>Select</button>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
            );
        }
        return null;
    }
    SubscriptionList() {
        if(this.state.item.subscriptions) {
            return (
                <ul>
                    {this.state.item.subscriptions.map(item => (
                        <li key={item.name}>
                            {item.name} {item.startDate} {item.endDate}
                            <button onClick={() => this.removeSubscription(item.id)}>Remove</button>
                        </li>
                    ))
                    }
                </ul>
            );
        }
        return null;
    }
    render() {
        return (
            <div className="User">
                <ErrorMessage error={this.state.error}/>
                <h2>User</h2>
                <fieldset>
                    <label>Name</label>{this.state.item.name}
                </fieldset>
                <h3>Subscriptions</h3>
                <button onClick={this.showAvailableSubscriptions}>Add</button>
                <this.SubscriptionList/>
                <this.AvailableSubscriptionList/>
            </div>
        );
    }
}
