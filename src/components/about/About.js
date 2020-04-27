import React from 'react';
import './about.css'
import aboutImg1 from 'assets/images/about-us1.jpg'
import aboutImg2 from 'assets/images/about-us2.jpg'

const About = () => {
    return(
        <div className="about-main-div">
        <div className='container'>
            <div className="row">
                <div className="col-md-6 about-padding">
                    <div className="about-writing">
                        <h4>WELCOM TO SMART EFUS WEB AGENCY</h4>
                        <h2>WE ARE THE BEST WEBSITE AGENCY IN THE WORLD</h2>
                        <p>We are committed to providing our customers with 
                            exceptional service while offering our employees the best training. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry has been the industry's standard dummy 
                            text ever since the 1500s.</p>
                        <a href='/' className="common_btn red_bg">
                            <span>learn more</span>
                         </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="ab_img1">
                            <img src={aboutImg1} alt="dummy" width='100%'/>
                        </div>
                        <div className="ab_img2">
                            <img src={aboutImg2} alt="typesetting" width='100%'/>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default About