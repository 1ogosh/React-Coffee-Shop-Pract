import { Component } from 'react';
import './app.scss';


import Header from '../main-header/main-header';
import About from '../main-about/main-about';
import OurBest from '../main-best/main-best';
import Footer from '../main-footer/main-footer';


class App extends Component {
        render() {
                return (
                        <div className='app'>
                                <Header />
                                <About />
                                <OurBest />
                                <Footer />
                        </div>
                )
        }
}

export default App;