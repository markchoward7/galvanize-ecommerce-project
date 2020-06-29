import React from 'react';

function User(props)
{

    return(
        <div className = "item">
            <p>{props.user.first_name}</p>
            <p>{props.user.last_name}</p>
            <p>{props.user.email}</p>
        </div>
    )
}
export default User;