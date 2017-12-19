import React, { Component } from 'react';

const shoes = [
    { name: "Running", type: "shoe", price: 10 },
    { name: "Dress", type: "shoe", price: 18 },
    { name: "Rock Climbing", type: "shoe", price: 11 },
    { name: "Hiking", type: "shoe", price: 12 },
    { name: "Biking", type: "shoe", price: 13 },
    { name: "Basketball", type: "shoe", price: 9 },
    { name: "Clown", type: "shoe", price: 8 }
]

class Shoes extends Component {
    render() {
        return (
            <div>
                <h2>Shoes</h2>
                {shoes.map(shoe => {
                    return (
                        <div className="box">
                            <p>{shoe.name}</p>
                            <button onClick={()=>this.props.addtoCart(shoe)}>
                                Add to Cart
                            </button>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default Shoes;