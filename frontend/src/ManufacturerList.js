import React from 'react';
import Manufacturer from './Manufacturer';
function ManufacturerList(props)
{
    
    return(
    <div>
        {
           
            props.manufacturers.map(manufacturers => <Manufacturer manufacturer= {manufacturers}/>) 

        }
    </div>
    )
}
export default ManufacturerList;

