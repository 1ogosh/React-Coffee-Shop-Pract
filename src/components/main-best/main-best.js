import './main-best.scss';

const OurBest = () => {
        return (
                <div className="Main-best">

                        <h1>Our best</h1>

                        <div className="wrapper">
                                <div className="best_card">
                                        <img src='/img/Rect1.png' alt="" />
                                        <h2>Solimo Coffee Beans 2 kg</h2>
                                        <p>10.73$</p>
                                </div>

                                <div className="best_card">
                                        <img src='/img/Rect2.png' alt="" />
                                        <h2>Presto Coffee Beans 1 kg</h2>
                                        <p>15.99$</p>
                                </div>

                                <div className="best_card">
                                        <img src='/img/Rect3.png' alt="" />
                                        <h2>AROMISTICO Coffee 1 kg</h2>
                                        <p>6.99$</p>
                                </div>
                        </div>
                </div>
        )
}

export default OurBest;