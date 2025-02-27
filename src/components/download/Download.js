import React from 'react';

class Download extends React.Component {
    render() { 
        return (
            <section className="download-section section-gap-full" id="download-section">
                <div className="container">
                    <div className="row download-wrap justify-items-between align-items-center">
                        <div className="col-lg-6">
                            <h1>Get Started for Free</h1>
                            <p>
                                To take a trivial example, which of us ever undertakes laborious physical exercise.right to
                                find fault with a man
                            </p>
                        </div>
                        <div className="col-lg-6 dload-btn">
                            <a href="www.facebook.com" className="primary-btn">
                                <span>Google Play</span>
                                <svg xmlns="http://www.w3.org/2000/svg" x='0px' y='0px' width='50' height='50'  viewBox="0 0 50 50"
                                    style={{fill:'#fff'}}>
                                    <g id="surface1">
                                        <path d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z "></path>
                                    </g>
                                </svg>
                            </a>
                            {/* <a href="#" className="primary-btn">
                                <span>App Store</span>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30"
                                    style="fill:#fff;">
                                    <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
                                </svg>
                            </a> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Download;