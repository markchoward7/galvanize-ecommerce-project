import React, {useState} from 'react';
const axios = require('axios').default;


function NewUser(props)
{ 
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        grandparent: props.grandparent
    })


    const handleChange = event => setState({
        ...state, 
        [event.target.name]: event.target.value
        
    })

    const handleSubmit = () => { 
        let newUser = {
            first_name: state.firstName,
            last_name: state.lastName,
            email: state.email
        }
        axios.post("/api/users", JSON.stringify({
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
        }))
        state.grandparent.setState({
            users: [...state.grandparent.state.users,newUser]
        })
        props.history.push("/users")
    }
   
   
    return(
        <div>
            <input type = "text" name = "firstName" onChange = {handleChange}/>
            <input type = "text" name = "lastName"  onChange = {handleChange}/>
            <input type = "text" name = "email"  onChange = {handleChange}/>

            <button onClick = {handleSubmit}> Submit </button>
        </div>
    )
}


export default NewUser;