import React from 'react'
import Slider from "react-slick"
import abstract1 from 'assets/abstracts/abstract01.jpg'
import abstract2 from 'assets/abstracts/abstract02.jpg'
import abstract3 from 'assets/abstracts/abstract03.jpg'
import abstract4 from 'assets/abstracts/abstract04.jpg'
import './clients.css'

const Clients = () => {
    var settings = {
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(
        <div className="bg-clients">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h4 className="sub_title">our clients</h4>
                        <h2 className="sec_title">they trust us</h2>
                        <p className="sec_desc">
                            We are committed to providing our customers with exceptional service while<br />
                            offering our employees the best training.
                        </p>
                    </div>
                </div>
                <Slider {...settings}>
                    <div>
                        <img src={abstract1} alt='sliderImage1'/>
                    </div>
                    <div>
                        <img src={abstract2} alt='sliderImage3' />
                    </div>
                    <div>
                        <img src={abstract3} alt='sliderImage3' />
                    </div>
                    <div>
                        <img src={abstract4} alt='sliderImage3' />
                    </div>
                    <div>
                        <img src={abstract4} alt='sliderImage3' />
                    </div>
                    <div>
                        <img src={abstract2} alt='sliderImage3' />
                    </div>
                    <div>
                        <img src={abstract1} alt='sliderImage3' />
                    </div>
                    <div>
                        <img src={abstract3} alt='sliderImage3' />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Clients