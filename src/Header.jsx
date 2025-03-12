import { Link } from "react-router-dom";
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
                            oraz wizyty w Holistycznych Usługach Zdrowia, a także wiele więcej! <br />
                            Jeśli polecisz mój gabinet innej osobie, otrzymasz 15% zniżki na kolejną wizytę. Zniżka zostanie naliczona, gdy osoba którą polecisz skorzysta z naszych usług.</p>
                        
                      

                    </div>

                </div>
            </div>

            <div className="wsmainwp clearfix">
    {/* LOGO */}
    <div className="desktoplogo">
        <a href="/"><img src="/images/logo.jpg" height="40" alt="header-logo" /></a>
    </div>

    {/* MENU */}
    <nav className="wsmenu clearfix">
        <ul className="wsmenu-list">
            <li className="nl-simple"><a href="/warsztaty-zdrowia-i-urody">Warsztaty zdrowia i urody</a></li>
            <li className="nl-simple"><a href="/pozostale-uslugi">Usługi i pakiety</a></li>
            <li className="nl-simple"><a href="/urzadzenia-pomiarowe">Urządzenia pomiarowe</a></li>
            <li className="nl-simple"><a href="/forever">Forever</a></li>
            <li className="nl-simple"><a href="/sativa-life">Sativa Life</a></li>
            <li className="nl-simple"><a href="/sanoplasma">Sanoplasma</a></li>
            <li className="nl-simple has-submenu">
                <a href="#">Produkty</a>
                <ul className="sub-menu">
                    <li><Link to="/chlorofil">Chlorofil</Link></li>
                    <li><Link to="/dezodorant">Dezodorant</Link></li>
                    <li><Link to="/galaretka">Galaretka</Link></li>
                    <li><Link to="/konopie">Konopie</Link></li>
                    <li><Link to="/woda">Woda</Link></li>
                    <li><Link to="/TianDe">TianDe</Link></li>
                </ul>
            </li>
            <li className="nl-simple"><a href="/cennik">Cennik</a></li>
        </ul>
    </nav>
</div>

            
        </header>
    )
}

export default Header