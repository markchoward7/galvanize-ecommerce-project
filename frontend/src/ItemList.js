import React from 'react';
import Item from './Item';
import NewItem from './NewItem';
import {
    Route,
    Link
  } from 'react-router-dom'
  
function CustomerList({items, parent})
{
    return (
        <div>
            <Link to = "/items/new">New Item</Link>
            <Route exact path = "/items"><div>
                {items.map(item => <Item name = {item.names} description = {item.descriptions}/>)}
            </div></Route>

            <Route path = "/items/new" render={props => <NewItem {...props} grandparent={parent} />} /> 
        </div>
    )
}
export default CustomerList;
