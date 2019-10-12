import React, {Fragment} from 'react';
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';
import About from './about/About';
import Feature from './feature/Experience';
import Screenshoot from './screenshoot/Screenshoot';

class Layout extends React.Component {
    state = {  }
    render() { 
        return (
            <Fragment>
                <Navbar />
                <Banner />
                <About />
                <Feature />
                <Screenshoot />
            </Fragment>
        );
    }
}
 
export default Layout;