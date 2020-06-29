import React from 'react';
import Customer from './Customer';
import NewCustomer from './NewCustomer';
import {
    Route,
    Link
  } from 'react-router-dom'
  
function CustomerList({customers, parent})
{
    return (
        <div>
            <Link to = "/customers/new">New Customer</Link>
            <Route exact path = "/customers"><div>
                {customers.map(customers => <Customer customer= {customers}/>)}
            </div></Route>

            <Route path = "/customers/new" render={props => <NewCustomer {...props} grandparent={parent} />} /> 
        </div>
    )
}
export default CustomerList;
