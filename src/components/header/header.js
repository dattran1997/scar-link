import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class header extends Component{

    render(){
        return (
        	<header>
				<nav>
					<div className="component">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<ul>
									<li><Link to="index">Trang chủ</Link></li>
									<li><Link to="#">Giới thiệu</Link></li>
									<li><Link to="#">Tin tức</Link></li>
									<li><Link to="#">Khuyến mãi</Link></li>
									<li><Link to="#">Liên hệ</Link></li>
								</ul>
							</div>

							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<ul>
									<li><a><i className="fas fa-envelope"></i>otovietthanh1988@gmail.com</a></li>
									<li><a><i className="fas fa-phone"></i>0123456789</a></li>
									<li><a><i className="fas fa-clock"></i>Làm việc 24/7</a></li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
				<menu>
					<div className="open_menu">
						<i className="fas fa-bars"></i>
					</div>
					<div className="component">
						<div className="logo">
							<img src="images/logo-viet-thanh.png"/>
						</div>
						<div className="menu">
							<ul className="list-item">
								<li className="item sub-menu">
									<Link to="sub-page" className="link-item">BỌC GHẾ DA Ô TÔ<i className="fas fa-sort-down"></i></Link>
									<ul>
										<li><Link to='sub-page'>BỌC GHẾ DA Ô TÔ</Link></li>
										<li><Link to='sub-page'>BỌC GHẾ DA Ô TÔ</Link></li>
										<li><Link to='sub-page'>BỌC GHẾ DA Ô TÔ</Link></li>
									</ul>
								</li>
								<li className="item"><Link to="sub-page" className="link-item">Trần Xe Ô Tô</Link></li>
								<li className="item sub-menu">
									<Link to="sub-page" className="link-item">BỌC GHẾ DA Ô TÔ<i className="fas fa-sort-down"></i></Link>
									<ul>
										<li><Link to='sub-page'>BỌC GHẾ DA Ô TÔ</Link></li>
										<li><Link to='sub-page'>BỌC GHẾ DA Ô TÔ</Link></li>
										<li><Link to='sub-page'>BỌC GHẾ DA Ô TÔ</Link></li>
									</ul>
								</li>
								<li className="item sub-menu">
									<Link to="sub-page" className="link-item">BỌC GHẾ DA Ô TÔ<i className="fas fa-sort-down"></i></Link>
									<ul>
										<li><Link to='sub-page'>BỌC GHẾ DA Ô TÔ</Link></li>
										<li><Link to='sub-page'>BỌC GHẾ DA Ô TÔ</Link></li>
										<li><Link to='sub-page'>BỌC GHẾ DA Ô TÔ</Link></li>
									</ul>
								</li>
							</ul>
						</div>
						
					</div>
				</menu>
			</header>
        );
    }
}

export default header;
