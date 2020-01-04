import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';

import index from './components/index';
import sub_page from './components/sub-page';
import product from './components/product';


class App extends Component {
  	render() {
	    return (
			<BrowserRouter>
			  	<div className="App">
					<Route path="/index" component={index}/>
					<Route path="/sub-page" component={sub_page}/>
					<Route path="/product" component={product}/>
			  	</div>
			</BrowserRouter>
	    );
	}
}

export default App;