import React from 'react';
import SaleOrder from './SaleOrder';
import NewSaleOrder from './NewSaleOrder';
import {
    Route,
    Link
  } from 'react-router-dom'
  
function SaleOrderList({saleOrders, parent})
{
    return(
        <div>
            <Link to = "/sale-orders/new">New Sale Order</Link>
            <Route exact path = "/sale-orders"><div>
                {saleOrders.map(saleOrder => <SaleOrder saleOrder= {saleOrder}/>)}
            </div></Route>
         
            <Route path = "/sale-orders/new" render={props => <NewSaleOrder {...props} grandparent={parent} />} /> 
        </div>
    )
}
export default SaleOrderList;

