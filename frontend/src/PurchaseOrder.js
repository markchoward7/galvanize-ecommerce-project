import React from 'react';

function PurchaseOrder(props)
{
    return(
        <div className = "item">
            <p>{props.purchaseOrder.users_id}</p>
            <p>{props.purchaseOrder.manufacturers_id}</p>
            <p>{props.purchaseOrder.date_ordered}</p>
            <p>{props.purchaseOrder.date_received}</p>
        </div>
    )
}
export default PurchaseOrder;