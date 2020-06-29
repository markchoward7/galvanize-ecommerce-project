import React from 'react';

function User(props)
{

    return(
        <div className = "item">
            <p>{props.users.first_name}</p>
            <p>{props.users.last_name}</p>
            <p>{props.users.email}</p>
        </div>
    )
}
export default User;