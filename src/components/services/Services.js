import React from 'react';
import bg5 from 'assets/bg/5.jpg'
import './services.css'

const Services = () => {
    return (
        <div style={{background: `url(${bg5}) no-repeat center center / cover`, padding: '120px 0'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center services-writing">
                        <p style={{color: '#e62b4a'}}>SERVICES WE ARE OFFERING</p>
                        <h1>WE DESIGN DIGITAL PRODUCTS THAT<br/>HELP GROW BUSINESSES.</h1>
                        <p>We are committed to providing our customers with exceptional service<br/>
                        while offering our employees the best training.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center flex-wrap mt-5">
                    <div className='p-3'>
                        <a href="/" className="icon_box_1 text-center">
                            <div className="flipper">
                                <div className="front">
                                    <i className="fa fa-paw" />
                                    <h3>Event<br/>Management</h3>
                                </div>
                                <div className="back">
                                    <i className="fa fa-paw" />
                                    <h3>Event<br/>Management</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='p-3'>
                        <a href="/" className="icon_box_1 text-center">
                            <div className="flipper">
                                <div className="front">
                                    <i className="fa fa-paw" />
                                    <h3>Career<br/>Counseling</h3>
                                </div>
                                <div className="back">
                                    <i className="fa fa-paw" />
                                    <h3>Career<br/>Counseling</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='p-3'>
                        <a href="/" className="icon_box_1 text-center">
                            <div className="flipper">
                                <div className="front">
                                    <i className="fa fa-paw" />
                                    <h3>Home<br/>Tuition</h3>
                                </div>
                                <div className="back">
                                    <i className="fa fa-paw" />
                                    <h3>Home<br/>Tuition</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='p-3'>
                        <a href="/" className="icon_box_1 text-center">
                            <div className="flipper">
                                <div className="front">
                                    <i className="fa fa-paw" />
                                    <h3>SEo & Content<br/>Writing</h3>
                                </div>
                                <div className="back">
                                    <i className="fa fa-paw" />
                                    <h3>SEo & Content<br/>Writing</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='p-3'>
                        <a href="/" className="icon_box_1 text-center">
                            <div className="flipper">
                                <div className="front">
                                    <i className="fa fa-paw" />
                                    <h3>App<br/>Development</h3>
                                </div>
                                <div className="back">
                                    <i className="fa fa-paw" />
                                    <h3>App<br/>Development</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Services