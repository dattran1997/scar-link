import React, { Component } from 'react';


import left_menu from './component-left-menu';
import related_item from './component-related-item';
import Item from './component-item-item';
import { Link } from 'react-router-dom';

class sub_page_body extends Component{

    render(){
        return (
        	<main>
                <div class="component product_component">
                    <div class="row">
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
                    </div>
                </div>
			</main>
        );
    }
}

export default sub_page_body;
