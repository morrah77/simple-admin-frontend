import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Header from './components/common/header/Header'
import Home from './components/home/Home'
import { List as SubscriptionList } from './components/subscription/list/List'
import { List as UserList } from './components/user/list/List'
import { Details as UserDetails } from './components/user/details/Details'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={UserList} />
          <Route exact path="/user/:id" component={UserDetails} />
          <Route path="/subscription" component={SubscriptionList} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/forgot-password" component={ForgotPassword} />
      </div>
    );
  }
}

export default App;
