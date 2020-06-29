import React from 'react';

function SaleOrder(props)
{
    return(
        <div className = "item">
            <p>{props.saleOrder.users_id}</p>
            <p>{props.saleOrder.customers_id}</p>
            <p>{props.saleOrder.date_ordered}</p>
            <p>{props.saleOrder.date_received}</p>
        </div>
    )
}
export default SaleOrder;