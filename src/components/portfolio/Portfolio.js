import React from 'react';
import portfolio1 from 'assets/portfolio/1.jpg'
import portfolio2 from 'assets/portfolio/2.jpg'
import portfolio3 from 'assets/portfolio/3.jpg'
import portfolio4 from 'assets/portfolio/4.jpg'
import portfolio5 from 'assets/portfolio/5.jpg'
import portfolio6 from 'assets/portfolio/6.jpg'
import './portfolio.css'

const Portfolio = () => {
    return(
        <section className="porfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h4 className="sub_title">our portfolio</h4>
                        <h2 className="sec_title">work showcase</h2>
                        <p className="sec_desc">
                            We are committed to providing our customers with exceptional service while<br/> offering our employees the best training.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="singlefolio">
                            <img src={portfolio1} alt="portfolio1" />
                            <div className="folioHover">
                                <a className="cate" href="/">Graphic</a>
                                <h4><a href="/">Design Styles</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="singlefolio">
                            <img src={portfolio2} alt="portfolio1" />
                            <div className="folioHover">
                                <a className="cate" href="/">Graphic</a>
                                <h4><a href="/">Design Styles</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="singlefolio">
                            <img src={portfolio3} alt="portfolio1" />
                            <div className="folioHover">
                                <a className="cate" href="/">Graphic</a>
                                <h4><a href="/">Design Styles</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="singlefolio">
                            <img src={portfolio4} alt="portfolio1" />
                            <div className="folioHover">
                                <a className="cate" href="/">Graphic</a>
                                <h4><a href="/">Design Styles</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="singlefolio">
                            <img src={portfolio5} alt="portfolio1" />
                            <div className="folioHover">
                                <a className="cate" href="/">Graphic</a>
                                <h4><a href="/">Design Styles</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="singlefolio">
                            <img src={portfolio6} alt="portfolio1" />
                            <div className="folioHover">
                                <a className="cate" href="/">Graphic</a>
                                <h4><a href="/">Design Styles</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio