import React from 'react';

function Customer(props)
{

    return(
        <div className = "item">
            <p>{props.customer.company_name}</p>
            <p>{props.customer.contact_name}</p>
            <p>{props.customer.contact_email}</p>
            <p>{props.customer.contact_phone}</p>
        </div>
    )
}
export default Customer;