import React, { Component } from 'react';

import Bg from './header/bg-nav';
import Header from './header/header';
import Body from './body/product-body';
import Footer from './footer/footer';

class product extends Component{

    render(){
        return (
			<React.Fragment>
			  	<Bg />
			  	<Header />
			  	<Body />
			  	<Footer />
		  	</React.Fragment>
		);
    }
}

export default product;
