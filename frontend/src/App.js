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
       <Link to = "/items">
        Items
       </Link>
        <Link to = "/"> Home </Link>
        <Link to = "/manufacturers">Manufacturers</Link>
        <Link to = "/customers">Customers</Link>
        <Link to = "/users">Users</Link>
        <Link to = "/purchase-orders">Purchase Orders</Link>
        <Link to = "/sale-orders">Sale Orders</Link>
       <Switch>
         <Route path = "/items"> 
         <ItemList items = {this.state.items}/>
         </Route>
         <Route path = "/manufacturers">
           <ManufacturerList manufacturers = {this.state.manufacturers}/>
         </Route>
         <Route path = "/customers">
           <CustomerList customers = {this.state.customers}/>
         </Route>
         <Route path = "/users">
           <UserList users = {this.state.users} parent = {this}/>
         </Route>
         <Route path = "/purchase-orders">
           <PurchaseOrderList purchaseOrder = {this.state.purchaseOrders} parent = {this}/>
         </Route>
         <Route path = "/sale-orders">
           <SaleOrderList saleOrder = {this.state.saleOrders} parent = {this}/>
         </Route>
         
         
         
       </Switch>
      </div></Router>
    );
  }
}

export default App;
