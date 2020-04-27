import React from 'react';
import { BrowserRouter, Router, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import history from '@history';
import App from './App';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Root() {
     return(
        <BrowserRouter>
            <Router  history={history}>
                <Route path="/" component={App} />
            </Router>
        </BrowserRouter>
       )
}

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
