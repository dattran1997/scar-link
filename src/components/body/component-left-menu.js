import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class left_menu extends Component{

    render(){
        return (
			
			<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 padding-0">
				<aside>
					<h3>Danh mục dịch vụ</h3>
					<ul>
						<li>
							<Link to="sub-page" className="title">BỌC GHẾ DA Ô TÔ</Link>
							<ul className="sub-list-product">
								<li className="sub-list"><Link to="sub-page">BỌC GHẾ DA Ô TÔ</Link></li>
								<li className="sub-list"><Link to="sub-page">BỌC GHẾ DA Ô TÔ</Link></li>
								<li className="sub-list"><Link to="sub-page">BỌC GHẾ DA Ô TÔ</Link></li>
								<li className="sub-list"><Link to="sub-page">BỌC GHẾ DA Ô TÔ</Link></li>
								<li className="sub-list"><Link to="sub-page">BỌC GHẾ DA Ô TÔ</Link></li>
							</ul>
						</li>
						<li><Link to="sub-page" className="title">BỌC GHẾ DA Ô TÔ</Link></li>
						<li><Link to="sub-page" className="title">BỌC GHẾ DA Ô TÔ</Link></li>
						<li><Link to="sub-page" className="title">BỌC GHẾ DA Ô TÔ</Link></li>
						<li><Link to="sub-page" className="title">BỌC GHẾ DA Ô TÔ</Link></li>
						<li><Link to="sub-page" className="title">BỌC GHẾ DA Ô TÔ</Link></li>
						<li><Link to="sub-page" className="title">BỌC GHẾ DA Ô TÔ</Link></li>
						<li><Link to="sub-page" className="title">BỌC GHẾ DA Ô TÔ</Link></li>
					</ul>
				</aside>
			</div>

		);
    }
}

export default left_menu;
