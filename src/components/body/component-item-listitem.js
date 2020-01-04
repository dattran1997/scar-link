import React, { Component } from 'react';


import Item from './component-item-item';
class list_item extends Component{

    render(){
        return (
			<div class="list-item-type">
				<div class="row">
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
		);
    }
}

export default list_item;
