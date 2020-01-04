import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class menu_item extends Component{

    render(){
        return (

			<div className="menu-item">
				<h3>
					Bọc nội thất
				</h3>
				<div className="more-item">
					<Link to="">XEM TẤT CẢ</Link>
				</div>         
				<div className="list-item">
					<ul>
						<li><Link to="sub-page">BMW</Link></li>
						<li><Link to="sub-page">BMW</Link></li>
						<li><Link to="sub-page">BMW</Link></li>
						<li><Link to="sub-page">BMW</Link></li>
						<li><Link to="sub-page">BMW</Link></li>
						<li><Link to="sub-page">BMW</Link></li>
						<li><Link to="sub-page">BMW</Link></li>
						<li><Link to="sub-page">BMW</Link></li>
					</ul>
				</div>
			</div>

		);
    }
}

export default menu_item;
