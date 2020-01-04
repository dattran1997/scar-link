import React, { Component } from 'react';

import Bg from './header/bg-nav';
import Header from './header/header';
import Body from './body/sub-page-body';
import Footer from './footer/footer';

class sub_page_bound extends Component{

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

export default sub_page_bound;
