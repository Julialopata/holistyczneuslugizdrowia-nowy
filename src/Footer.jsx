import scroll_to from "./scroll_to.js";
import {useLocation, useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <footer id="footer-3" className="wide-40 footer division">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-info mb-40">

                                <img src="/images/logo.jpg" height="60" alt="footer-logo"/>

                                <p className="p-sm mt-20">Holistyczne Usługi Zdrowia oferuje indywidualne podejście do
                                    zdrowia, integrując naturalne metody poprawy samopoczucia. Specjalizujemy się w
                                    biorezonansie, doradztwie żywieniowym i terapiach wspierających zdrowy styl życia,
                                    dostosowane do potrzeb każdego klienta.
                                </p>

                                <div className="footer-socials-links mt-20">
                                    <ul className="foo-socials text-center clearfix">
                                        <li><a href="https://www.facebook.com/holistyczneuslugizdrowia"
                                               className="ico-facebook"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="email:praktycznasalcia@wp.pl" className="ico-email"><i
                                            className="far fa-envelope"></i></a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 offset-lg-1">
                            <div className="footer-box mb-40">

                                <h5 className="h5-xs">Adres</h5>

                                <p>
                                    <a href="https://maps.app.goo.gl/8LNJLdsEXaWYH5hJA"><span><i
                                        className="fas fa-map-marker-alt"></i> Ignacego Łukasiewicza 25 A, 41-216 Sosnowiec</span></a>
                                </p>
                                <p className="foo-email mt-20">
                                    <a href="email:praktycznasalcia@wp.pl">
                                        <i className="far fa-envelope"></i>
                                        praktycznasalcia@wp.pl
                                    </a>
                                </p>

                                <p className="mt-20">
                                    <a href="tel:791852526" className=""><i className="fas fa-phone"></i>791852526</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-2">
                            <div className="footer-links mb-40">
                                <h5 className="h5-xs">O usługach</h5>

                                <ul className="foo-links clearfix">
                                    <li><a href="/pozostale-uslugi">Usługi i pakiety</a></li>
                                    <li><a href="/urzadzenia-pomiarowe">Urządzenia Pomiarowe</a></li>
                                    <li><a href="/cennik">Cennik</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-2">
                            <div className="footer-links mb-40">
                                <h5 className="h5-xs">O mnie</h5>

                                <ul className="clearfix">
                                    <li>
                                        <a href="javascript:void(0);" onClick={(e) => {
                                            e.preventDefault();
                                            if (location.pathname === '/') {
                                                scroll_to('about-5');
                                            } else {
                                                navigate('/');
                                                setTimeout(() => {
                                                    scroll_to('about-5');
                                                }, 500);
                                            }
                                        }}>O mnie</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" onClick={(e) => {
                                            e.preventDefault();
                                            if (location.pathname === '/') {
                                                scroll_to('gallery');
                                            } else {
                                                navigate('/');
                                                setTimeout(() => {
                                                    scroll_to('gallery');
                                                }, 500);
                                            }
                                        }}>Certyfikaty</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
