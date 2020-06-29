import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


const axios = require('axios').default
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  async componentDidMount() {
    const response = await axios.get("/api/items")
    console.log(response.data)
  }

  render() {
    return ( 
      <Router><div className="App">
       some text
       <Switch>
         
       </Switch>
      </div></Router>
    );
  }
}

export default App;
