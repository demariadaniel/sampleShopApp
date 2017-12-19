import React, { Component } from 'react';

const hats = [
    { name: "Baseball", type: "hat", price: 7 },
    { name: "Toque", type: "hat", price: 5 },
    { name: "Top", type: "hat", price: 9 },
    { name: "Fur", type: "hat", price: 11 },
    { name: "Pirate", type: "hat", price: 4 },
    { name: "Feather", type: "hat", price: 3 },
    { name: "Clown", type: "hat", price: 6 }
]

class Hats extends Component {
    render(){
        return(
            <div>
                <h2>Hats</h2>
                {hats.map(hat => {
                    return (
                        <div className="box">
                            <p>{hat.name}</p>
                            <button onClick={()=>this.props.addtoCart(hat)}>
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

export default Hats;