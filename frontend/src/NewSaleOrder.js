import React, {useState} from 'react';
const axios = require('axios').default;


function NewSaleOrder(props)
{
    
    const [state, setState] = useState({
        userId: '',
        customerId: '',
        dateOrdered: '',
        dateReceived: '',
        grandparent: props.grandparent
    })
    const handleChange = event => setState({
        ...state, 
        [event.target.name]: event.target.value
        
    })


    const handleSubmit = () => { 
        let newSaleOrder = {
            users_id: state.userId,
            customers_id: state.customerId,
            date_ordered: state.dateOrdered,
            date_received: state.dateReceived
        }
        var response = axios.post("/api/sale-orders", JSON.stringify({

            userId: state.userId,
            customerId: state.customerId,
            dateOrdered: state.dateOrdered,
            dateReceived: state.dateReceived
        }))
        state.grandparent.setState({

        saleOrders: [...state.grandparent.state.saleOrders,newSaleOrder]

    })}
   
   
    return(
<div>
    <input type = "text" name = "userId" onChange = {handleChange}/>
    <input type = "text" name = "customerId"  onChange = {handleChange}/>
    <input type = "date" name = "dateOrdered"  onChange = {handleChange}/>
    <input type = "date" name = "dateReceived"  onChange = {handleChange}/>

    <button onClick = {handleSubmit}> Submit </button>
</div>
        )

}


export default NewSaleOrder;