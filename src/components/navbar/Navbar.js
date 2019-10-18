import React from 'react';
import $ from 'jquery';
import logoForWeb from '../../images/logo.png';


class Navbar extends React.Component {
    componentDidMount() {
        // $('#dopeNav').dopeNav({
        //     stickyNav: true,
        //   });
        
          //Smooth Scrolling Using Navigation Menu
          $('a[href*="#"]').on('click', function (e) {
            $('html,body').animate({
              scrollTop: $($(this).attr('href')).offset().top - 70
            }, 500);
            e.preventDefault();
          });
    }
    render() { 
        return (
            <header className="header-area" id="header-area">
            <div className="dope-nav-container breakpoint-off">
                <div className="container">
                    <div className="row">
                        <nav className="dope-navbar justify-content-between" id="dopeNav">
                            <a className="nav-brand" href="index.html">
                                <img src={logoForWeb} alt="Website Logo" />
                            </a>
                            <div className="dope-navbar-toggler">
                                <span className="navbarToggler">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>
                            <div className="dope-menu">
                                <div className="dopecloseIcon">
                                    <div className="cross-wrap">
                                        <span className="top"></span>
                                        <span className="bottom"></span>
                                    </div>
                                </div>
                                <div className="dopenav">
                                    <ul id="nav">
                                        <li>
                                            <a href="#banner-section">Home</a>
                                        </li>
                                        <li>
                                            <a href="#about-section">About</a>
                                        </li>
                                        <li>
                                            <a href="#feature-section">Feature</a>
                                        </li>
                                        <li>
                                            <a href="#price-section">Price</a>
                                        </li>
                                        <li>
                                            <a href="#testimonial-section">Testimonial</a>
                                        </li>
                                        <li>
                                            <a href="#download-section">Download</a>
                                        </li>
                                    </ul>
                                </div>                            
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        );
    }
}
 
export default Navbar;