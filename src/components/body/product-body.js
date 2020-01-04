import React, { Component } from 'react';


import Item from './component-item-item';
import { Link } from 'react-router-dom';

class sub_page_body extends Component{

    render(){
        return (
        	<main>
                <div class="component product_component">
                    <div class="row">

                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 padding-0">
                        <aside>
                            <h3>Danh mục dịch vụ</h3>
                            <ul>
                                <li>
                                    <Link to="sub-page" class="title">BỌC GHẾ DA Ô TÔ</Link>
                                    <ul class="sub-list-product">
                                        <li class="sub-list"><Link to="sub-page">BỌC GHẾ DA Ô TÔ</Link></li>
                                        <li class="sub-list"><Link to="sub-page">BỌC GHẾ DA Ô TÔ</Link></li>
                                        <li class="sub-list"><Link to="sub-page">BỌC GHẾ DA Ô TÔ</Link></li>
                                        <li class="sub-list"><Link to="sub-page">BỌC GHẾ DA Ô TÔ</Link></li>
                                        <li class="sub-list"><Link to="sub-page">BỌC GHẾ DA Ô TÔ</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="sub-page" class="title">BỌC GHẾ DA Ô TÔ</Link></li>
                                <li><Link to="sub-page" class="title">BỌC GHẾ DA Ô TÔ</Link></li>
                                <li><Link to="sub-page" class="title">BỌC GHẾ DA Ô TÔ</Link></li>
                                <li><Link to="sub-page" class="title">BỌC GHẾ DA Ô TÔ</Link></li>
                                <li><Link to="sub-page" class="title">BỌC GHẾ DA Ô TÔ</Link></li>
                                <li><Link to="sub-page" class="title">BỌC GHẾ DA Ô TÔ</Link></li>
                                <li><Link to="sub-page" class="title">BỌC GHẾ DA Ô TÔ</Link></li>
                            </ul>
                        </aside>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 padding-0">
                        <div class="product_item">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 padding-0">
                                    <div class="product_image">
                                        <img src="images/noithat.jpg"/>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 padding-0">
                                    <div class="product_title">
                                        <h1>Taplo Camry</h1>
                                    </div>
                                    <div class="prices">
                                        <span>Giá : Liên Hệ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product_describe">
                            <h2>Mô tả sản phẩm</h2>
                            <p>Trong mỗi sản phẩm chúng tôi luôn mang đến những thiết kế  riêng cho xe của bạn : chất liệu da luôn tốt nhất bảo hành từ 3 đến  7 năm cho từng chất liệu da như giả da .da công nghiệp . Da bò  nhập tốt nhất trên thị trường l.: liên hệ 0️⃣9️⃣8️⃣8️⃣7️⃣9️⃣2️⃣1️⃣8️⃣9️⃣ Để được tư vấn một cách tốt nhất cũng như kiểu dáng ghế bạn muốn thay đổi</p>
                            <img src="images/slide1.jpg"/>
                            <p>√ Cam kết làm hài lòng khách đến, vừa lòng khách đi</p>
                            <p>√ Hoàn tiền 100% nếu khách hàng cảm thấy không ưng ý</p>
                            <p>√ Bảo hành 5 năm toàn diện</p>
                            <p>√ Sử dụng da cao cấp, nhập khẩu chính hãng</p>
                            <p>√ Đội ngũ nhân viên tay nghề cao, kinh nghiệm lâu năm</p>
                            <p>√ Khâu lắp ráp chuyên nghiệp,</p>
                            <p>√ Chất liệu sơn chính hãng không bong tróc, bay màu</p>
                        </div>
                        <div class="related_products">
                            <h2>Sản phẩm liên quan</h2>
                        </div>
                        <div class="list-item-type">
                            <div class="row">
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
