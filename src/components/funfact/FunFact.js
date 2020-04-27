import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'
import bg5 from 'assets/bg/5.jpg'
import trustImage from 'assets/images/trust4.jpg'
import './funfact.css'

const FunFact = () => {
    const [ onScreen, setOnScreen ] = useState(false)
    const onChange = visible => {
        if(visible) setOnScreen(true)
    }
    return(
        <div>
        <section className="funfact" style={{background: `url(${bg5}) no-repeat center center / cover`}}>
        <div className="container">
        <VisibilitySensor onChange={onChange} delayedCall>
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-md-3 noPadding BR">
                    <div className="singlefunfact text-center">
                        <CountUp separator="," className="counter-point timer" start={0} end={onScreen ? 8705 : 0} duration={5} useEasing={true} />
                        <h3>Projects Completed</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-3 noPadding BR">
                    <div className="singlefunfact text-center">
                        <CountUp separator="," className="counter-point timer" start={0} end={onScreen ? 480 : 0} duration={5} useEasing={true} />
                        <h3>Active Clients</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-3 noPadding BR">
                    <div className="singlefunfact text-center">
                        <CountUp separator="," className="counter-point timer" start={0} end={onScreen ? 626 : 0} duration={5} useEasing={true} />
                        <h3>Cups of Coffee</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-3 noPadding">
                    <div className="singlefunfact text-center">
                        <CountUp separator="," className="counter-point timer" start={0} end={onScreen ? 774 : 0} duration={5} useEasing={true} />
                        <h3>Happy Clients</h3>
                    </div>
                </div>
            </div>
            </VisibilitySensor>
        </div>
    </section>
    <section className="commonSection trustClient">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <div className="CL_content">
                        <img src={trustImage} alt="trustImage" />
                        <div className="abc_inner">
                            <div className="row">
                                <div className="col-lg-5 col-sm-0 col-md-5">
                                </div>
                                <div className="col-lg-7 col-sm-12 col-md-7">
                                    <div className="abci_content">
                                        <h2>We are trusted by more than 8900 clients</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercita-tion ullamco laboris nisi ut aliquip ex ea commodo.
                                        </p>
                                        <a className="common_btn red_bg" href="/"><span>Learn More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    )
}

export default FunFact