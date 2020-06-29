import React, {useState} from 'react';
const axios = require('axios').default;


function NewItem(props)
{ 
    const [state, setState] = useState({
        names: '',
        descriptions: '',
        grandparent: props.grandparent
    })


    const handleChange = event => setState({
        ...state, 
        [event.target.name]: event.target.value
        
    })

    const handleSubmit = async () => { 
        let newItem = {
            names: state.names,
            descriptions: state.descriptions
        }
        axios.post("/api/items", JSON.stringify({
            names: state.names,
            descriptions: state.descriptions
        }))
        await state.grandparent.setState({
            items: [...state.grandparent.state.items, newItem]
        })
        props.history.push("/items")
    }
   
   
    return(
        <div>
            <input type = "text" name = "names" onChange = {handleChange}/>
            <input type = "text" name = "descriptions"  onChange = {handleChange}/>

            <button onClick = {handleSubmit}> Submit </button>
        </div>
    )
}


export default NewItem;