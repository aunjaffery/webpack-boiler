import React from 'react'
import Slider from "react-slick"
import './team.css'
import team1 from 'assets/team/1.jpg'
import team2 from 'assets/team/2.jpg'
import team3 from 'assets/team/3.jpg'
import team4 from 'assets/team/4.jpg'
import team5 from 'assets/team/5.jpg'

const Team = () => {
    var settings = {
        autoplay: true,
       autoplaySpeed: 2000,
       slidesToShow: 3,
       dots: true,
       arrows: false,
       centerMode: true,
       centerPadding: '350px',
       responsive: [
            {
              breakpoint: 1600,
              settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 4
              }
            },
            {
              breakpoint: 1199,
              settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 991,
              settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1
              }
            }
          ]
    }
    return(
        <section className="team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h4 className="sub_title">meet the team</h4>
                        <h2 className="sec_title">expert people</h2>
                        <p className="sec_desc">
                            We are committed to providing our customers with exceptional service while<br/> offering our employees the best training.
                        </p>
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                <div className="singleTM">
                    <div className="tm_img">
                        <img src={team1} alt="team1" />
                        <div className="tm_overlay">
                            <div className="team_social">
                                <a href="/"><span>Facebook</span></a>
                                <a href="/"><span>Twitter</span></a>
                                <a href="/"><span>Youtube</span></a>
                            </div>
                            <a href="/" className="common_btn"><span>learn more</span></a>
                        </div>
                    </div>
                    <div className="detail_TM">
                        <h5>kevin smith</h5>
                        <h6>co founder</h6>
                    </div>
                </div>
                <div className="singleTM">
                    <div className="tm_img">
                        <img src={team2} alt="team1" />
                        <div className="tm_overlay">
                            <div className="team_social">
                                <a href="/"><span>Facebook</span></a>
                                <a href="/"><span>Twitter</span></a>
                                <a href="/"><span>Youtube</span></a>
                            </div>
                            <a href="/" className="common_btn"><span>learn more</span></a>
                        </div>
                    </div>
                    <div className="detail_TM">
                        <h5>Jessica Brown</h5>
                        <h6>General Manager</h6>
                    </div>
                </div>
                <div className="singleTM">
                    <div className="tm_img">
                        <img src={team3} alt="team1" />
                        <div className="tm_overlay">
                            <div className="team_social">
                                <a href="/"><span>Facebook</span></a>
                                <a href="/"><span>Twitter</span></a>
                                <a href="/"><span>Youtube</span></a>
                            </div>
                            <a href="/" className="common_btn"><span>learn more</span></a>
                        </div>
                    </div>
                    <div className="detail_TM">
                        <h5>Mike Hardson</h5>
                        <h6>Senior Designer</h6>
                    </div>
                </div>
                <div className="singleTM">
                    <div className="tm_img">
                        <img src={team4} alt="team1" />
                        <div className="tm_overlay">
                            <div className="team_social">
                                <a href="/"><span>Facebook</span></a>
                                <a href="/"><span>Twitter</span></a>
                                <a href="/"><span>Youtube</span></a>
                            </div>
                            <a href="/" className="common_btn"><span>learn more</span></a>
                        </div>
                    </div>
                    <div className="detail_TM">
                        <h5>Rose Ford</h5>
                        <h6>Marketing manager</h6>
                    </div>
                </div>
                <div className="singleTM">
                    <div className="tm_img">
                        <img src={team5} alt="team1" />
                        <div className="tm_overlay">
                            <div className="team_social">
                                <a href="/"><span>Facebook</span></a>
                                <a href="/"><span>Twitter</span></a>
                                <a href="/"><span>Youtube</span></a>
                            </div>
                            <a href="/" className="common_btn"><span>learn more</span></a>
                        </div>
                    </div>
                    <div className="detail_TM">
                        <h5>John Albert</h5>
                        <h6>Brand Officer</h6>
                    </div>
                </div>
            </Slider>
        </section>
    )
}

export default Team