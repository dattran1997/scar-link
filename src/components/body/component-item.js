import React, { Component } from 'react';

import List from './component-item-listmenu';
import List_item from './component-item-listitem';

class component_item extends Component{

    render(){
        return (
			
			<div class="component">
				<List />
				<List />
				<List_item />
				<List />
				<List_item />
				<List />
				<List_item />
			</div>

		);
    }
}

export default component_item;
