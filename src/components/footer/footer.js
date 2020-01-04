import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class footer extends Component{

    render(){
        return (
			<footer>
				<div class="component">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 padding-0">
							<div class="title">
								<p><strong>NỘI THẤT Ô TÔ VIỆT THANH</strong></p>
								<p>Địa chỉ :</p>
								<p>Điện thoại:</p>
							</div>
						</div>
						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 padding-0">
							<div class="contact">
								<h3>Kết nối với chúng tôi</h3>
							</div>
						</div>
						<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 padding-0">
							
						</div>
					</div>
				</div>
				<div class="call">
					<a href="tel:0976828051"><i class="fas fa-phone"></i></a>
				</div>
			</footer>
        );
    }
}

export default footer;
