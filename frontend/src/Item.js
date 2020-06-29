import React from 'react';

function Item(props)
{

    return(
        <div className = "item">
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    )
}
export default Item;