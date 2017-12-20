import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Shoes from './Shoes';
import Hats from './Hats';
import Cart from './Cart';
import axios from 'axios';

class Shop extends Component {
    constructor() {
        super();
        this.state = {
            cart: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/cart')
            .then(res => {
                this.setState({
                    cart: res.data
                })
            })
    }
    addtoCart = (item) => {
        this.setState({
            cart: this.state.cart.concat([item])
        }, () => {
            axios.post('http://localhost:8080/cart', this.state.cart)
        })
    }
    render() {
        return (
            <div>
                <h4>Welcome back, {this.props.userName}!</h4>
                <p>You have {this.state.cart.length} items in your cart</p>
                <Link to={this.props.match.path + "/shoes"}>
                    <button>Shoes</button>
                </Link>
                <Link to={this.props.match.path + "/hats"}>
                    <button>Hats</button>
                </Link>
                <div>
                    <Switch>
                        <Route
                            path={this.props.match.path + "/shoes"}
                            render={() => {
                                return <Shoes addtoCart={this.addtoCart} />
                            }} />
                        <Route
                            path={this.props.match.path + "/hats"}
                            render={() => {
                                return <Hats addtoCart={this.addtoCart} />
                            }} />
                    </Switch>
                    <Cart cart={this.state.cart} />
                </div>
            </div>
        )
    }
}

export default Shop;