import React from 'react';
import appImage from '../../images/app-img.png';


const About = () => {
    return (
        <section className="about-section section-gap-full relative" id="about-section">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-12 about-left">
                        <img className="img-fluid" src={appImage} alt="App Design" />
                    </div>
                    <div className="col-lg-5 col-md-7 about-right">
                        <h3>What Is Dope App?</h3>
                        <h1>The Most Beautiful Theme For Your App</h1>
                        <ul>
                            <li className="d-flex">
                                <div className="icon">
                                    <span className="ti-layout-media-center-alt"></span>
                                </div>
                                <div className="details">
                                    <h4>Retina Ready</h4>
                                    <p>
                                        A wonderful serenity has taken possession of my entire soul, like these sweet
                                        mornings of spring which I enjoyed.
                                    </p>
                                </div>
                            </li>
                            <li className="d-flex">
                                <div className="icon">
                                    <span className="ti-crown"></span>
                                </div>
                                <div className="details">
                                    <h4>Premium Quality</h4>
                                    <p>
                                        A wonderful serenity has taken possession of my entire soul, like these sweet
                                        mornings of spring which I enjoyed.
                                    </p>
                                </div>
                            </li>
                            <li className="d-flex">
                                <div className="icon">
                                    <span className="ti-headphone-alt"></span>
                                </div>
                                <div className="details">
                                    <h4>Excellent Support</h4>
                                    <p>
                                        A wonderful serenity has taken possession of my entire soul, like these sweet
                                        mornings of spring which I enjoyed.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;