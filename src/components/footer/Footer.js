import React, {useEffect} from 'react';
import bg5 from 'assets/bg/5.jpg'
import { Link } from 'react-router-dom';
import Logo from 'assets/abstracts/efus-logo.svg'

const Footer = props => {
    const { scrollTop } = props;

    useEffect(() => {
        if(scrollTop > 350)
        return  document.getElementById("back-to-top").setAttribute("style","display:block")
        return document.getElementById("back-to-top").setAttribute("style","display:none");
    }, [scrollTop])

    const ClicktoTop = () => {
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
    }

    let backtotop = {display : 'none'}

    return(
        <div className="main-footer" style={{background: `url(${bg5}) no-repeat center center / cover`}}>
            <div className="container">
                <div className="row my-4">
                    <div className='col-lg-5 col-sm-6 col-md-5'>
                        <div className='pb-5 pr-5'>
                        <div className="footer-logo mb-5">
                            <img src={Logo} alt="Logo" width='180px'/>
                        </div>
                        <p className="footer-desp">
                        Welcome to EFUS agency. 
                        Lorem ipsum is simply free text dolor sit amet consectetur adipisicing elit. 
                        Tempore corrupti temporibus fuga earum asperiores, 
                        alias excepturi sit mpedit fugit laudantium.
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 col-md-4">
                        <div className="pb-5 widget contact_widgets">
                            <h3 className="widget_title mb-5">CONTACT</h3>
                            <p className='mb-4'>
                                66 Broklyn Street, New York<br/>
                                United States of America
                            </p>
                            <p>P: 666 888 000</p>
                            <p>E: needhelp@efus.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-2 col-md-3">
                        <aside className="pb-5 widget social_widget">
                            <h3 className="widget_title mb-5">SOCIAL</h3>
                            <ul>
                                <li className='pb-2'><a href="/"><i className="fa fa-twitter"></i>Twitter</a></li>
                                <li className='pb-2'><a href="/"><i className="fa fa-facebook-square"></i>Facebook</a></li>
                                <li className='pb-2'><a href="/"><i className="fa fa-youtube-play"></i>Youtube</a></li>
                            </ul>
                        </aside>
                    </div>
                </div>
                <div className='footer-copyright'>
                © copyright 2020 by KnightDevs.com
                </div>
            </div>
            <div id="back-to-top" style={backtotop} onClick={ClicktoTop}>
                <Link className="top arrow" to='/'>
                        <i className="fa fa-angle-up"></i>
                </Link>
            </div>
        </div>
    )
}
export default Footer;