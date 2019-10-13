import React, {Fragment} from 'react';
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';
import About from './about/About';
import Feature from './feature/Experience';
import Screenshoot from './screenshoot/Screenshoot';
import Question from './question/Question';
import Overview from './overview/Overview';
import Testimonial from './testimonial/Testimonial';
import Price from './price/Price';

class Layout extends React.Component {
    
    render() { 
        return (
            <Fragment>
                <Navbar />
                <Banner />
                <About />
                <Feature />
                <Screenshoot />
                <Question />
                <Overview />
                <Testimonial />
                <Price />
            </Fragment>
        );
    }
}
 
export default Layout;