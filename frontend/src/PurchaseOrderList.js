import React from 'react';
import PurchaseOrder from './PurchaseOrder';
import NewPurchaseOrder from './NewPurchaseOrder';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'
  
function PurchaseOrderList(props)
{

    
    return(
        <Router>
            <Link to = "/purchase-orders/new"> New Purchase Order</Link>
    <Route exact path = "/purchase-orders">
    <div>
        {
           
            props.purchaseOrder.map(purchaseOrder => <PurchaseOrder purchaseOrder= {purchaseOrder}/>) 
        

        }
    </div>
         </Route>
         <Route path = "/purchase-orders/new"> 
         <NewPurchaseOrder grandparent = {props.parent}/> </Route>
   
    </Router>
    )
}
export default PurchaseOrderList;
