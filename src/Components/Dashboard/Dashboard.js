import React, { Component } from 'react';
import Product from '../Product/Product';



class Dashboard extends Component {
  render() {
    return (
      <div>
      {this.props.inventory.map((e, i)=> {
       return <Product key={i} item ={e} /> })}
      </div>
    );
  }
}

export default Dashboard;