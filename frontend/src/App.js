import React from 'react';
import ItemList from './ItemList';
import ManufacturerList from './ManufacturerList'
import CustomerList from './CustomerList'
import UserList from './UserList'
import PurchaseOrderList from './PurchaseOrderList'
import SaleOrderList from './SaleOrderList'

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


const axios = require('axios').default
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      manufacturers: [],
      customers: [],
      users: [],
      purchaseOrders: [],
      saleOrders: []
    }
  }

  async componentDidMount() {
    var response = await axios.get("/api/items")
    this.setState ({
      items: response.data,
    })

     response = await axios.get("/api/manufacturers")
    this.setState({
      manufacturers: response.data,
    })

    response = await axios.get("/api/customers")
    this.setState({
      customers: response.data,
    })

    response = await axios.get("/api/users")
    this.setState({
      users: response.data,
    })

    response = await axios.get("/api/purchase-orders")
    this.setState({
      purchaseOrders: response.data,
    })

    response = await axios.get("/api/sale-orders")
    this.setState({
      saleOrders: response.data,
    })
  }
  

  render() {
    return ( 
      <Router><div className="App">
        <div className="sidebar">
          <br /><Link to = "/"> Home </Link>
          <br /><Link to = "/items">Items</Link>
          <br /><Link to = "/manufacturers">Manufacturers</Link>
          <br /><Link to = "/customers">Customers</Link>
          <br /><Link to = "/users">Users</Link>
          <br /><Link to = "/purchase-orders">Purchase Orders</Link>
          <br /><Link to = "/sale-orders">Sale Orders</Link>
        </div>
        <Switch>
          <Route path = "/items"> 
            <ItemList items = {this.state.items} parent={this}/>
          </Route>
          <Route path = "/manufacturers">
            <ManufacturerList manufacturers = {this.state.manufacturers} parent={this}/>
          </Route>
          <Route path = "/customers">
            <CustomerList customers = {this.state.customers} parent={this}/>
          </Route>
          <Route path = "/users">
            <UserList users = {this.state.users} parent = {this}/>
          </Route>
          <Route path = "/purchase-orders">
            <PurchaseOrderList purchaseOrders = {this.state.purchaseOrders} parent = {this}/>
          </Route>
          <Route path = "/sale-orders">
            <SaleOrderList saleOrders = {this.state.saleOrders} parent = {this}/>
          </Route>
        </Switch>
     </div></Router>
    );
  }
}

export default App;
