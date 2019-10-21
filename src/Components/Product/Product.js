import React from 'react'
import './Product.css'

export default function Product (props) {
    let { name, price, img} = props.item
        return (
            <div>
                
                <div className ='product-display'>    
         
                 <ul> {name}</ul>
                 <ul> {price}</ul> 
                 <img src ={img} alt ="no img"></img>
  
                </div>
            </div>
        )
    }

