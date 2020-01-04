import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class item extends Component{

    render(){
        return (
		
			<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 padding-0">
				<Link to="product" class="item">
					<div class="image">
						<img src={process.env.PUBLIC_URL + '/images/noithat.jpg'}/>
					</div>
					<div class="name">
						<h3>Trần sao cho các dòng xe</h3>
					</div>
					<div class="prices">
						<span>Giá : Liên Hệ</span>
					</div>
				</Link>
			</div>

		);
    }
}

export default item;
