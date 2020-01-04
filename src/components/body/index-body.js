import React, { Component } from 'react';


import Slide from './slider';
import Component_item from './component-item';

class index_body extends Component{

    render(){
        return (
        	<main>
                <Slide />
                <Component_item />
			</main>
        );
    }
}

export default index_body;
