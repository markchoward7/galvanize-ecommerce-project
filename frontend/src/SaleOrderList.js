import React from 'react';
import SaleOrder from './SaleOrder';
import NewSaleOrder from './NewSaleOrder';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'
  
function SaleOrderList(props)
{

    
    return(
        <Router>
            <Link to = "/sale-orders/new"> New Sale Order</Link>
    <Route exact path = "/sale-orders">
    <div>
        {
           
            props.saleOrder.map(saleOrder => <SaleOrder saleOrder= {saleOrder}/>) 
        

        }
    </div>
         </Route>
         <Route path = "/sale-orders/new"> 
         <NewSaleOrder grandparent = {props.parent}/> </Route>
   
    </Router>
    )
}
export default SaleOrderList;

