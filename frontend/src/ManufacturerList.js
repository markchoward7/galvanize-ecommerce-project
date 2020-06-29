import React from 'react';
import Manufacturer from './Manufacturer';
import NewManufacturer from './NewManufacturer';
import {
    Route,
    Link
  } from 'react-router-dom'
  
function CustomerList({manufacturers, parent})
{
    return (
        <div>
            <Link to = "/manufacturers/new">New Manufacturer</Link>
            <Route exact path = "/manufacturers"><div>
                {manufacturers.map(manufacturer => <Manufacturer manufacturer= {manufacturer}/>)}
            </div></Route>

            <Route path = "/manufacturers/new" render={props => <NewManufacturer {...props} grandparent={parent} />} /> 
        </div>
    )
}
export default CustomerList;
