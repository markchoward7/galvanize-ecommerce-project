import React from 'react';
import Item from './Item';
function ItemList(props)
{
    return(
    <div>
        {
           
            props.items.map(item => <Item name = {item.names} description = {item.descriptions}/>) 
        }
    </div>
    )
}
export default ItemList;