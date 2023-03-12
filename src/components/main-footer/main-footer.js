import './main-footer.scss';

const Footer = () => {
        return(
                <div className="footer">
                          <div className="footer_nav">
                                <ul className='footer_nav_ul'>
                                <img className='footer_nav_ul_li_rect' src="/img/footer_rect.svg" alt="" />
                                        <li className='footer_nav_ul_li'>Coffee house</li>
                                        <li className='footer_nav_ul_li'>Our coffee</li>
                                        <li className='footer_nav_ul_li'>For your pleasure</li>
                                </ul>
                        </div>
                        <img className='footer_img' src="/img/Group.svg" alt="" />
                </div>
        )
}

export default Footer;