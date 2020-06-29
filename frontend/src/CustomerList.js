import React from 'react';
import Customer from './Customer';
function CustomerList(props)
{
    
    return(
    <div>
        {
           
            props.customers.map(customers => <Customer customer= {customers}/>) 

        }
    </div>
    )
}
export default CustomerList;

