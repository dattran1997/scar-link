import React, { Component } from 'react';
import Item from './component-item-item';


class related_menu extends Component{

    render(){
        return (

			
			<div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 padding-0">
				<div className="related_products">
					<h2>Sản phẩm liên quan</h2>
				</div>
				<div className="list-item-type">
					<div className="row">
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
					</div>
				</div>
			</div>

		);
    }
}

export default related_menu;
