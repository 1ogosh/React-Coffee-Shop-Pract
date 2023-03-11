import { Component } from 'react';
import './app.scss';

import Header from '../main-header/main-header';
import About from '../main-about/main-about';



class App extends Component {
        render() {
                return (
                        <div className='app'>
                                <Header />
                                <About />
                        </div>
                )
        }
}

export default App;