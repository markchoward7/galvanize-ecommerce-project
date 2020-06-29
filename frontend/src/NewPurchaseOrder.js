import React, {useState} from 'react';
const axios = require('axios').default;


function NewPurchaseOrder(props)
{
    const [state, setState] = useState({
        userId: '',
        manufacturerId: '',
        dateOrdered: '',
        dateReceived: '',
        grandparent: props.grandparent
    })


    const handleChange = event => setState({
        ...state, 
        [event.target.name]: event.target.value
        
    })

    const handleSubmit = () => { 
        let newPurchaseOrder = {
            users_id: state.userId,
            manufacturers_id: state.manufacturerId,
            date_ordered: state.dateOrdered,
            date_received: state.dateReceived
        }
        axios.post("/api/purchase-orders", JSON.stringify({
            userId: state.userId,
            manufacturerId: state.manufacturerId,
            dateOrdered: state.dateOrdered,
            dateReceived: state.dateReceived
        }))
        state.grandparent.setState({
            purchaseOrders: [...state.grandparent.state.purchaseOrders,newPurchaseOrder]
        })
        props.history.push("/purchase-orders")
    }
   
   
    return(
        <div>
            <input type = "text" name = "userId" onChange = {handleChange}/>
            <input type = "text" name = "manufacturerId"  onChange = {handleChange}/>
            <input type = "date" name = "dateOrdered"  onChange = {handleChange}/>
            <input type = "date" name = "dateReceived"  onChange = {handleChange}/>

            <button onClick = {handleSubmit}> Submit </button>
        </div>
    )
}


export default NewPurchaseOrder;