import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'animate.css'
import 'assets/styles/main.css'
import sliderImage1 from 'assets/images/1_1.jpg'
import sliderImage2 from 'assets/images/1_2.jpg'
import sliderImage3 from 'assets/images/1_3.jpg'

const Slider = props => {
    return(
        <div className="slider-main-dvi">
            <Carousel interval={null} indicators={false} fade={true}>
            <Carousel.Item className='slider-items'>
                <img
                className="d-block w-100"
                src={sliderImage1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <p className="slider-text-2nd animated bounceInLeft" style={{animationDelay: "1s"}}>Welcome to efus agency.</p>
                    <p className="slider-text-head animated bounceInRight" style={{animationDelay: "1s"}}>Smart Web<br />Event Management.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  className='slider-items'>
                <img
                className="d-block w-100"
                src={sliderImage2}
                alt="Third slide"
                />

                <Carousel.Caption>
                    <p className="slider-text-2nd animated fadeInDown" style={{animationDelay: "1s"}}>Welcome to efus agency.</p>
                    <p className="slider-text-head animated fadeInUpBig" style={{animationDelay: "1s"}}>Smart Web<br />career counseling.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  className='slider-items'>
                <img
                className="d-block w-100"
                src={sliderImage3}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <p className="slider-text-2nd animated zoomIn" style={{animationDelay: "1s"}}>Best Customer Support.</p>
                    <p className="slider-text-head animated zoomIn" style={{animationDelay: "1s"}}>Welcome to efus</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;