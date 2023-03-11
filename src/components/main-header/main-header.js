
import './main-header.scss';

const Header = () => {
        return (
                <div className="header">
                        <div className="header_nav">
                                <ul className='header_nav_ul'>
                                        <li className='header_nav_ul_li'>Coffee house</li>
                                        <li className='header_nav_ul_li'>Our coffee</li>
                                        <li className='header_nav_ul_li'>For your pleasure</li>
                                </ul>
                        </div>
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