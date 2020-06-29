import React from 'react';
import User from './User';
import NewUser from './NewUser';
import {
    Route,
    Link
  } from 'react-router-dom'
  
function UserList({users, parent})
{
    return (
        <div>
            <Link to = "/users/new">Add User</Link>
            <Route exact path = "/users"><div>
                {users.map(user => <User user = {user}/>)}
            </div></Route>

            <Route path = "/users/new" render={props => <NewUser {...props} grandparent={parent} />} /> 
        </div>
    )
}
export default UserList;
