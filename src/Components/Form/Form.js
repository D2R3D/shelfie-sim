import React, { Component } from 'react'
import axios from 'axios'
import noImage from './../../assetts/no_image.jpg'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            img: ''
        }  
this.handlePrice = this.handlePrice.bind(this)
this.handleName = this.handleName.bind(this)
this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleName(text) {
        if (text.length <= 20) {
          this.setState({ name: text})
        }
      }

     handlePrice(val) {

    if (val[0] === '.') {
      val = '0' + val
    }
    // Only allows number input
    if (isNaN(Number(val))) {
      return;
    }
    // Splits dollars and cents apart for individual testing
    let chop = val.split('.');
    let dollars = chop[0];
    let cents = chop[1];
    // Doesn't allow for dollar amounts to be entered that have unnecessary zeros in the dollar amount
    if (dollars[0] === '0') {
      dollars = '0'
    }
    // Allows user to enter a '.' to begin adding cents
    if (val.indexOf('.') !== -1) {
      dollars += '.'
    }
    // Limits cent input to two decimal places
    if (cents && cents[1]) {
      cents = cents[0] + cents[1];
      val = dollars + cents;
    } else if (!cents) {
      val = dollars;
    }
    // Limits input size
    if (Number(val) * 100 >= 2147483647) {
      return;
    }
 
    this.setState({ price: val })
  }

  numberSubmit=(num) => {
    num ? num = Number(num) : num = 0
    return Math.round(num * 100)
  }

    handleImage = (url) =>{
      var img = new Image();
    img.onload = _ => this.setState({ img: url });
    img.onerror = _ => this.setState({ img: '' });
    img.src = url;
  }
    handleSubmit() {
        let { name, price, img } = this.state;
        if (name) {
          let product = {
            name: '',
            price: this.numberSubmit(price),
            img
          }
          axios.post('/api/product', product)
            .then(res => {
              this.props.getInventory();
              this.clearInput();
            })
            .catch(err => console.log('axios create error', err))
        } else {
          console.log('you are missing a name and need to handle this user fail');
        }
      }


    clearInput=()=>{
        this.setState({
          name: '',
          price: 0,
          img: ''
        })
      }

      render() {
        return (
          <div className='Form'>
            {this.state.img
              ? <div className='form_img_preview' style={{ backgroundImage: `url('${this.state.img}')` }}></div>
              : <div className='form_img_preview' style={{ backgroundImage: `url('${noImage}')` }}></div>}
            <p>Image URL:</p>
            <input type='text' value={this.state.img} onChange={e => this.handleImage(e.target.value)} />
            <p>Product Name:</p>
            <input type='text' value={this.state.name} onChange={e => this.handleName(e.target.value)} />
            <p>Price:</p>
            <input type='text' pattern="[0-9]*" value={this.state.price} onChange={e => this.handlePrice(e.target.value)} />
            <div className='form_button_box'>
              <button onClick={_ => this.clearInput()}>Cancel</button>
              <button onClick={_ => this.handleSubmit()}>Add to Inventory</button>
            </div>
          </div>
        );
      }
    }
