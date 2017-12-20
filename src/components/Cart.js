import React, { Component } from 'react';

class Cart extends Component {
  render(){
    return(
      <div>
        <h2>Cart</h2>
        <p>
          <strong>Total: </strong> 
          $ {this.props.cart.reduce((a, item)=>a+item.price, 0)}
        </p>
        <p>{this.props.cart.length} items added</p>
          {this.props.cart.map((item)=>{
              return(
                <li>
                  {item.name} {item.type}
                </li>
              )
            })
          }
      </div>
    )
  }
}

export default Cart;