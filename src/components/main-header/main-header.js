
import './main-header.scss';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

const Header = () => {
        return (
                <div className="header">
                      <Router>
                      <div className="header_nav">
                        
                        <ul className='header_nav_ul'>
                        <img className='header_img' src="/img/header_rect.svg" alt="" />
                                <li className='header_nav_ul_li'><NavLink href="./">Coffee house</NavLink></li>
                                <li className='header_nav_ul_li'><NavLink href="/">Our coffee</NavLink></li>
                                <li className='header_nav_ul_li'><NavLink href="/">For your pleasure</NavLink></li>
                        </ul>
                </div>
                <Switch>
                        <Route path="../"></Route>
                        <Route></Route>
                        <Route></Route>
                </Switch>
                      </Router>
                        <div className="header_main">
                                <h1>Everything You Love About Coffee</h1>
                                <img className="header_main_img" src="/img/Vector.svg" alt="White" />
                                <h2>We makes every day full of energy and taste <br /> Want to try our beans?</h2>
                                <button type="button">More</button>
                        </div>
                </div>
        )
}

export default Header; 