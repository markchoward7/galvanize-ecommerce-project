import React from 'react';
import User from './User';
import NewUser from './NewUser';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'
  
function UserList(props)
{

    
    return(
        <Router>
            <Link to = "/users/new"> Add User</Link>
    <Route exact path = "/users">
    <div>
        {
           
            props.users.map(users => <User users= {users}/>) 
        

        }
    </div>
         </Route>
         <Route path = "/users/new"> 
         <NewUser grandparent = {props.parent}/> </Route>
   
    </Router>
    )
}
export default UserList;
