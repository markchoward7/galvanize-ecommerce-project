import React, {useState} from 'react';
const axios = require('axios').default;


function NewCustomer(props)
{ 
    const [state, setState] = useState({
        companyName: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        grandparent: props.grandparent
    })


    const handleChange = event => setState({
        ...state, 
        [event.target.name]: event.target.value
        
    })

    const handleSubmit = () => { 
        let newCustomer = {
            company_name: state.companyName,
            contact_name: state.contactName,
            contact_email: state.contactEmail,
            contact_phone: state.contactPhone
        }
        axios.post("/api/customers", JSON.stringify({
            companyName: state.companyName,
            contactName: state.contactName,
            contactEmail: state.contactEmail,
            contactPhone: state.contactPhone
        }))
        state.grandparent.setState({
            customers: [...state.grandparent.state.customers, newCustomer]
        })
        props.history.push("/customers")
    }
   
   
    return(
        <div>
            <input type = "text" name = "companyName" onChange = {handleChange}/>
            <input type = "text" name = "contactName"  onChange = {handleChange}/>
            <input type = "text" name = "contactEmail"  onChange = {handleChange}/>
            <input type = "text" name = "contactPhone"  onChange = {handleChange}/>

            <button onClick = {handleSubmit}> Submit </button>
        </div>
    )
}


export default NewCustomer;