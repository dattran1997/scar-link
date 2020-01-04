import React, { Component } from 'react';

import Bg from './header/bg-nav';
import Header from './header/header';
import Body from './body/index-body';
import Footer from './footer/footer';

class header extends Component{

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

export default header;
