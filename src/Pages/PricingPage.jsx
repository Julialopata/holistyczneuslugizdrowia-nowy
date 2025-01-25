const PricingPage = () => {
    return (
        <>
            <section id="about-5" className="pt-100 pb-100  about-section division">
                <div className="">
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-lg-6">
                            <div className="about-img wow fadeInUp text-center" data-wow-delay="0.6s"
                                 style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp'}}>
                                <img className="img-fluid" src="/images/promo-card.png" alt="about-image"/>
                            </div>
                        </div>

                        {/* TEXT BLOCK */}
                        <div className="col-lg-6">
                            <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.4s"
                                 style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}
                            >

                                {/* Section ID */}
                                <span className="section-id blue-color">Promocje</span>

                                {/* Title */}
                                <h3 className="h3-md steelblue-color">Promocje</h3>


                                <p>Współpracuję z&nbsp;międzynarodową aloesową firmą <strong> Forever Living
                                    Products</strong>, która&nbsp;istnieje na&nbsp;rynku od&nbsp;ponad 45 lat.<br/><br/><br/>Dzięki
                                    tej&nbsp;współpracy w&nbsp;dowolnym momencie możesz założyć w&nbsp;moim gabinecie
                                    kartę <strong> Klienta Forever</strong>, która&nbsp;uprawnia Cię do&nbsp;zniżek
                                    w&nbsp;Holistycznych Usługach Zdrowia na&nbsp;konsultacje, wizyty stacjonarne
                                    oraz&nbsp;on-line.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing-1" className="pricing-section">
                <div className="container">
                    <div className="row pricing-row">
                        {/* PRICING TABLE #1 */}
                        <div className="col-lg-6">
                            <div className="pricing-table icon-xl">
                                <img src="/images/comments-question-solid.svg" className="blue-color" width="80" height="80"
                                     alt="My Happy SVG"/>

                                {/* Title */}
                                <h5 className="h5-lg">Konsultacja</h5>

                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <span className="price steelblue-color"
                                          style={{textDecoration: 'line-through', fontSize: '40px'}}
                                    >100 zł</span>
                                </div>

                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <span className="price steelblue-color">60</span>
                                    <sup className="steelblue-color">zł</sup>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="pricing-table icon-xl">
                                <img src="/images/file-magnifying-glass-sharp-thin.svg" className="blue-color" width="80"
                                     height="80"
                                     alt="My Happy SVG"/>

                                {/* Title */}
                                <h5 className="h5-lg">Wizyta kontrolna</h5>

                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <span className="price steelblue-color"
                                          style={{textDecoration: 'line-through', fontSize: '40px'}}
                                    >50 zł</span>
                                </div>

                                {/* Plan Price  */}
                                <div className="pricing-plan">
                                    <span className="price steelblue-color">30</span>
                                    <sup className="steelblue-color">zł</sup>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ALL PRICING TABLES BUTTON */}
                    <div className="row">
                        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2 text-center">
                            <div className="all-pricing-btn mb-40">
                                {/* Price Notice */}
                                <p className="text-black-50" style={{fontSize: '2rem'}}
                                >KARTA UPRAWNIA CIĘ TAKŻE DO ZAKUPU
                                    PRODUKTÓW
                                    MARKI
                                    FOREVER LIVING PRODUCTS
                                    <span>ZE ZNIŻKĄ DETALICZNĄ -5% LUB ZNIŻKĄ HURTOWĄ -30% — NA STAŁE.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End container */}
            </section>

            {/* Sekcja z dodanymi zdjęciami */}
            <section id="usługi" className="usługi division">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="h2-xs" style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>Usługi</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <img src="/images/content/cennik/konsultacja.jpg" alt="Image 1" className="img-fluid"/>
                        </div>
                        <div className="col-md-3 mb-4">
                            <img src="/images/content/cennik/pozostale.jpg" alt="Image 2" className="img-fluid"/>
                        </div>
                        <div className="col-md-3 mb-4">
                            <img src="/images/content/cennik/biorezonans.png" alt="Image 3" className="img-fluid"/>
                        </div>
                        <div className="col-md-3 mb-4">
                            <img src="/images/content/cennik/pakiet_podstawowy.png" alt="Image 4" className="img-fluid"/>
                        </div>
                        <div className="col-md-3 mb-4">
                            <img src="/images/content/cennik/pakiet_szczegolowy.png" alt="Image 4" className="img-fluid"/>
                        </div>
                        <div className="col-md-3 mb-4">
                            <img src="/images/content/cennik/sonoplasma.jpg" alt="Image 4" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default PricingPage;
