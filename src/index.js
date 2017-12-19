import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <Route path="/" render={(props)=>{return <App {...props} />}} />
    </BrowserRouter>, document.getElementById('root'));
