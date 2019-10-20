import React from 'react';
import appImage from '../../images/app-img.png';
import flShape_1 from '../../images/shape/fl-shape-1.png';
import flShape_2 from '../../images/shape/fl-shape-2.png';
import flShape_3 from '../../images/shape/fl-shape-3.png';
import flShape_4 from '../../images/shape/fl-shape-4.png';
import flShape_5 from '../../images/shape/fl-shape-5.png';
import flShape_6 from '../../images/shape/fl-shape-6.png';
import flShape_7 from '../../images/shape/fl-shape-7.png';
// import flShape_8 from '../../images/shape/fl-shape-8.png';
import flShape_9 from '../../images/shape/fl-shape-9.png';
import flShape_10 from '../../images/shape/fl-shape-10.png';



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
            <div className="floating-shapes">
                <span data-parallax='{"x": 150, "y": -20, "rotateZ":500}'>
                    <img src={flShape_1} alt="Shape One" />
                </span>
                <span data-parallax='{"x": 250, "y": 150, "rotateZ":500}'>
                    <img src={flShape_2} alt="Shape Two" />
                </span>
                <span data-parallax='{"x": -180, "y": 80, "rotateY":2000}'>
                    <img src={flShape_3} alt="Shape Three" />
                </span>
                <span data-parallax='{"x": -20, "y": 180}'>
                    <img src={flShape_4} alt="Shape Four" />
                </span>
                <span data-parallax='{"x": 300, "y": 70}'>
                    <img src={flShape_5} alt="Shape Five" />
                </span>
                <span data-parallax='{"x": 250, "y": 180, "rotateZ":1500}'>
                    <img src={flShape_6} alt="Shape Six" />
                </span>
                <span data-parallax='{"x": 180, "y": 10, "rotateZ":2000}'>
                    <img src={flShape_7} alt="Shape Seven" />
                </span>
                <span data-parallax='{"x": 60, "y": -100}'>
                    <img src={flShape_9} alt="Shape Nine" />
                </span>
                <span data-parallax='{"x": -30, "y": 150, "rotateZ":1500}'>
                    <img src={flShape_10} alt="Shape Ten" />
                </span>
            </div>
        </section>
    );
}
 
export default About;