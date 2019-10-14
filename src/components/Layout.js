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
import Download from './download/Download';
import Team from './team/Team';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

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
                <Testimonial />
                <Price />
                <Overview />
                <Team />
                <Download />
                <Contact />
                <Footer />
            </Fragment>
        );
    }
}
 
export default Layout;