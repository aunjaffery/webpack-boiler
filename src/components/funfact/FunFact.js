import React from 'react';
import CountUp from 'react-countup';
import bg5 from 'assets/bg/5.jpg'
import trustImage from 'assets/images/trust4.jpg'
import './funfact.css'

const FunFact = () => {
    return(
        <div>
        <section class="funfact" style={{background: `url(${bg5}) no-repeat center center / cover`}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6 col-md-3 noPadding BR">
                    <div class="singlefunfact text-center">
                        <CountUp separator="," className="counter-point timer" start={0} end={8705} duration={5} useEasing={true} />
                        <h3>Projects Completed</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-3 noPadding BR">
                    <div class="singlefunfact text-center">
                        <CountUp separator="," className="counter-point timer" start={0} end={480} duration={5} useEasing={true} />
                        <h3>Active Clients</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-3 noPadding BR">
                    <div class="singlefunfact text-center">
                        <CountUp separator="," className="counter-point timer" start={0} end={626} duration={5} useEasing={true} />
                        <h3>Cups of Coffee</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-3 noPadding">
                    <div class="singlefunfact text-center">
                        <CountUp separator="," className="counter-point timer" start={0} end={774} duration={5} useEasing={true} />
                        <h3>Happy Clients</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="commonSection trustClient">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-sm-12">
                    <div class="CL_content">
                        <img src={trustImage} alt="trustImage" />
                        <div class="abc_inner">
                            <div class="row">
                                <div class="col-lg-5 col-sm-0 col-md-5">
                                </div>
                                <div class="col-lg-7 col-sm-12 col-md-7">
                                    <div class="abci_content">
                                        <h2>We are trusted by more than 8900 clients</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercita-tion ullamco laboris nisi ut aliquip ex ea commodo.
                                        </p>
                                        <a class="common_btn red_bg" href="/"><span>Learn More</span></a>
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