import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../screens/Home';
import Login from '../screens/Login';
import AddContact from '../screens/AddContact';
import OrderRequests from '../screens/OrderRequests';
import MyOrders from '../screens/MyOrders';
import MyFoods from '../screens/MyContacts';



const customHistory = createBrowserHistory();

// Routes For Navigation
const MyRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Route exact path='/' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/add-contacts' component={AddContact}></Route>
            <Route path='/user-profile' component={OrderRequests}></Route>
            <Route path='/my-orders' component={MyOrders}></Route>
            <Route path='/my-contacts' component={MyFoods}></Route>
        </div>
    </Router>
)

export default MyRoutes