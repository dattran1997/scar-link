import React, { Component } from 'react';


class slider extends Component{

    render(){
        return (
			
			<section className="bound_slide" id="header">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 padding-0">
					<div id="myCarousel2" className="carousel slide" data-ride="carousel">
					  	<ol className="carousel-indicators">
						    <li data-target="#myCarousel2" data-slide-to="0" className="active"></li>
						    <li data-target="#myCarousel2" data-slide-to="1"></li>
						    <li data-target="#myCarousel2" data-slide-to="2"></li>
					  	</ol>
					  	<div className="carousel-inner">
					    	<div className="item active">
								  <img src={process.env.PUBLIC_URL + '/images/slide1.jpg'} /> 
					    	</div>
						    <div className="item">
								  <img src={process.env.PUBLIC_URL + '/images/slide2.jpg'} /> 
						    </div>
						    <div className="item">
								  <img src={process.env.PUBLIC_URL + '/images/slide3.jpg'} /> 
						    </div>
					  	</div>
						<a className="left carousel-control" href="#myCarousel2" data-slide="prev">
						    <span className="glyphicon glyphicon-chevron-left"><i className="fas fa-chevron-circle-left"></i></span>
						    <span className="sr-only">Previous</span>
						</a>
						<a className="right carousel-control" href="#myCarousel2" data-slide="next">
						    <span className="glyphicon glyphicon-chevron-left"><i className="fas fa-chevron-circle-right"></i></span>
						    <span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</section>
		);
    }
}

export default slider;
