
const Header = () => {
    return (
        <header id="header" className="header">
            <div className="wsmobileheader clearfix">
                <a id="wsnavtoggle" className="wsanimated-arrow"><span></span></a>
                <span className="smllogo"><img src="/images/logo.jpg" width="180" height="40" alt="mobile-logo"/></span>
                <a href="tel:791852526" className="callusbtn"><i className="fas fa-phone"></i></a>
            </div>

            <div className="headtoppart bg-blue clearfix">
                <div className="headerwp clearfix">

                    <div className="headertopleft">
                        <div className="address clearfix"><a href="https://maps.app.goo.gl/8LNJLdsEXaWYH5hJA"><span><i
                            className="fas fa-map-marker-alt"></i>Ignacego Łukasiewicza 25 A, 41-216 Sosnowiec</span></a>
                            <a href="tel:791852526" className="callusbtn"><i
                                className="fas fa-phone"></i>+48 791852526</a>
                        </div>
                    </div>

                    <div className="headertopright">
                        <a className="facebookicon" title="Facebook"
                           href="https://www.facebook.com/holistyczneuslugizdrowia"><i
                            className="fab fa-facebook-f"></i> <span
                            className="mobiletext02">Facebook</span></a>
                    </div>
                    <div className="additional-info">
                        <p>Aktualne promocje: z Kartą Klienta Forever i Sativa Life zniżki nawet -40% na konsultacje
                            oraz wizyty w Holistycznych Usługach Zdrowia, a także wiele więcej!</p>

                    </div>

                </div>
            </div>

            <div className="wsmainfull menu clearfix">
                <div className="wsmainwp clearfix">

                    <div className="desktoplogo"><a href="/"><img src="/images/logo.jpg" height="40"
                                                                        alt="header-logo"/></a></div>

                    <nav className="wsmenu clearfix">
                        <ul className="wsmenu-list">
                            <li className="nl-simple" aria-haspopup="true"><a href="warsztaty_zdrowia_i_urody.html">Warsztaty zdrowia i urody</a></li>
                            <li className="nl-simple" aria-haspopup="true"><a href="/pozostale-uslugi">Pozostałe usługi</a></li>
                            <li className="nl-simple" aria-haspopup="true"><a href="/urzadzenia-pomiarowe">Urządzenia pomiarowe</a></li>
                            <li className="nl-simple" aria-haspopup="true"><a href="/forever">Forever</a></li>
                            <li className="nl-simple" aria-haspopup="true"><a href="/sativa-life">Sativa Life</a></li>
                            <li className="nl-simple" aria-haspopup="true"><a href="sanoplasma.html">Sanoplasma</a></li>
                            <li className="nl-simple" aria-haspopup="true"><a href="/cennik">Cennik</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header