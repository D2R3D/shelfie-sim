import React, { Component } from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super() 
    this.state ={
      inventory: [{name: 'item', price: 4.99, img: 'https://i.kym-cdn.com/photos/images/original/001/431/201/40f.png'},
      {name: 'snacks', price: 299.99, img: 'http://cdn.shopify.com/s/files/1/0191/7850/products/RICKMORTY_39_-_COVER_A_FNL_WEB_1024x1024.jpg?v=1530034748'},
      {name: 'beer', price: 19.99, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-05/18/5/asset/buzzfeed-prod-fastlane-03/sub-buzz-30721-1495100246-6.png?downsize=1600:*&output-format=auto&output-quality=auto]'},]
    }
  }

  getInventory=()=>{
    axios.get('/api/inventory').then(results => this.setState({inventory: results.data}))
    console.log('success')
  }
  render() {
    return (
      <div>
        <Header />
       
        <Form getInventory ={this.getInventory} />
        <Dashboard inventory = {this.state.inventory}/>
       
      </div>
    )
  }
}
