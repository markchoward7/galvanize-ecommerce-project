import React from 'react';
import PurchaseOrder from './PurchaseOrder';
import NewPurchaseOrder from './NewPurchaseOrder';
import {
    Route,
    Link
  } from 'react-router-dom'
  
function PurchaseOrderList({purchaseOrders, parent})
{
    return(
        <div>
            <Link to = "/purchase-orders/new">New Purchase Order</Link>
            <Route exact path = "/purchase-orders"><div>
                {purchaseOrders.map(purchaseOrder => <PurchaseOrder purchaseOrder= {purchaseOrder}/>)}
            </div></Route>

            <Route path = "/purchase-orders/new" render={props => <NewPurchaseOrder {...props} grandparent={parent} />} /> 
        </div>
    )
}
export default PurchaseOrderList;
