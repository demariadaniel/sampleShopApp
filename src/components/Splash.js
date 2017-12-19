import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Splash extends Component {
    render(){
        return(
            <div>
                <div>
                    <div>
                        <h3>Welcome to the Shop!</h3>
                        <p>Please enter your name</p>
                        <input type="text" onChange={this.props.onChange}/>
                        <Link to="/shop/shoes">
                            <button disabled={this.props.userName.length < 1}>
                                Shop!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;