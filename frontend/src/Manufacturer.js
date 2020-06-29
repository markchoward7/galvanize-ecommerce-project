import React from 'react';

function Manufacturer(props)
{

    return(
        <div className = "item">
            <p>{props.manufacturer.company_name}</p>
            <p>{props.manufacturer.contact_name}</p>
            <p>{props.manufacturer.contact_email}</p>
            <p>{props.manufacturer.contact_phone}</p>
        </div>
    )
}
export default Manufacturer;