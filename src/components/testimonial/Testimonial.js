import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import bg3 from 'assets/bg/3.jpg'
import './testimonial.css'

const Testimonial = () => {
    return(
        <section className="testimonial" style={{background: `url(${bg3}) no-repeat fixed center / cover`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 text-center">
                    <ScrollAnimation animateIn="zoomIn">
                        <div className="testimonial_content">
                            <div className="testi_icon"><i className="fa fa-users"></i></div>
                            <h2>Great things in business are never done by one person. <span>They’re done by a team of people.</span></h2>
                            <p>
                                We are committed to providing our customers with exceptional service while<br /> offering our employees the best training.
                            </p>
                        </div>
                     </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial