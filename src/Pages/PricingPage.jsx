import { Helmet } from 'react-helmet-async';

const PricingPage = () => {
    return (
        <>
            <Helmet>
                <title>Cennik Usług - Konsultacje, Biorezonans, Terapie | Holistyczne Usługi Zdrowia</title>
                <meta name="keywords" content="cennik naturopata, ceny konsultacji zdrowotnych, konsultacja naturopatyczna cena, wizyta kontrolna cena, karta klienta forever zniżki, karta klienta sativa zniżki, biorezonans cena, biorezonans quantum cena, mezator m1 cennik, biorezonans szczegółowy cena, sanoplasma cennik, scan biofeedback cena, terapia spersonalizowana cena, pakiet 10 sesji sanoplasma, terapia zapper cena, lek bioinformatyczny cena, metaterapia autoterapia cena, warsztaty zdrowia urody cena, żywa woda urządzenie cena, doradztwo konopne cbd cena, drenaż limfatyczny pressmatic cena, pulsing cena, lampa tdp cena, promocje forever living, rabaty forever living, zniżka 5%, zniżka 30%, cennik usług holistycznych, cennik gabinetu naturopatycznego, cennik terapii naturalnych, cennik biorezonansu sosnowiec, cennik sanoplasmy sosnowiec, cennik drenażu limfatycznego, tanie konsultacje naturopatyczne, promocje gabinet holistyczny, pakiety promocyjne zdrowie" />
                <meta name="description" content="Cennik usług gabinetu Holistyczne Usługi Zdrowia. Konsultacje od 60 zł, biorezonans od 180 zł, sanoplasma, drenaż limfatyczny, pulsing. Karta Klienta Forever i Sativa - zniżki do 40%." />
            </Helmet>
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

            
            <div class="pricing-container">
            <section id="wizyta-konsultacja-cennik">
  <h2>Wizyta - Konsultacja</h2>
  <ul>
    <li>Pierwsza wizyta, konsultacja – <strong>100 zł</strong></li>
    <li>Z założeniem karty klienta FOREVER – <strong>60 zł</strong></li>
    <li>Z założeniem karty klienta Sativa – <strong>60 zł</strong></li>
    <li>Wizyta kontrolna – <strong>50 zł</strong></li>
    <li>Z kartą klienta Forever i Sativa – wizyta kontrolna – <strong>30 zł</strong></li>
  </ul>
</section>

<section id="zywa-woda-cennik">
  <h2>Urządzenie do produkcji "Żywej Wody"</h2>
  <p>Zapytaj o urządzenie do produkcji "Żywej Wody".</p>
</section>

<section id="doradztwo-konopne-cennik">
  <h2>Doradztwo konopne w ujęciu CBD</h2>
  <p>Dobór odpowiedniego olejku i dawki.</p>
  <p><strong>Usługa zawarta w cenie produktu.</strong></p>
</section>

<section id="sanoplasma-cennik">
  <h2>Sanoplasma 3</h2>
  <ul>
    <li>Scan i biofeedback (2 godziny) – <strong>180 zł</strong></li>
    <li>Terapia spersonalizowana (do 3 godzin) – <strong>180 zł</strong></li>
    <li>Zakup pakietu 10 sesji (2 sesje gratis) – <strong>1440 zł</strong></li>
    <li>1 godzina terapii – <strong>60 zł</strong></li>
    <li>Do każdej sesji "Żywa Woda" – <strong>GRATIS</strong></li>
  </ul>
</section>

<section id="pozostale-uslugi-cennik">
  <h2>Pozostałe usługi</h2>
  <ul>
    <li>Terapia Zapperem – <strong>50 zł</strong></li>
    <li>Stworzenie leku bioinformatycznego / biorezonans – <strong>20 zł</strong></li>
    <li>Metaterapia / Autoterapia biorezonans – jeden zabieg – <strong>50 zł</strong></li>
    <li>Warsztaty zdrowia i urody – <strong>50 zł</strong></li>
  </ul>
</section>

<section id="biorezonans-cennik">
  <h2>Biorezonans</h2>
  <ul>
    <li>Biorezonans QUANTUM – <strong>180 zł</strong></li>
    <li>Biorezonans MEZATOR M1 – Pakiet podstawowy – <strong>250 zł</strong></li>
    <li>Biorezonans szczegółowy – <strong>300 zł</strong></li>
    <li>Biorezonans szczegółowy z doborem indywidualnej terapii – <strong>300 zł</strong></li>
    <li>Kontrolny biorezonans – <strong>180 zł</strong></li>
  </ul>
</section>

<section id="biorezonans-promocja-cennik">
  <h2>Biorezonans MEZATOR M1 – PROMOCJA</h2>
  <ul>
    <li>Pakiet podstawowy (wykaz patogenów, stan wybranych organów) – <strong>250 zł</strong></li>
    <li>Biorezonans szczegółowy – pasożyty, stan organów, homeostaza biochemiczna, alergeny, obciążenia energetyczne, hormony, wiek biologiczny, litoterapia, prognoza stanu organizmu na 1 rok, 5 lat – <del>350 zł</del> <strong>300 zł</strong></li>
    <li>Biorezonans szczegółowy z doborem indywidualnej terapii – Fitoterapia, suplementacja, kierunek żywieniowy – <del>400 zł</del> <strong>300 zł</strong></li>
    <li>Kontrolny biorezonans – <strong>180 zł</strong></li>
  </ul>
</section>

<section id="drenaz-limfatyczny-promocja-cennik">
  <h2>Drenaż limfatyczny Pressmatic</h2>
  <p><strong>Do końca lipca – specjalna cena za zabieg:</strong></p>
  <ul>
    <li>Zabieg pojedynczy (jedna partia ciała – nogi, ręce lub tułów) - <strong>100 zł</strong> / <strong>80 zł</strong></li>
    <li>Zabieg łączony (nogi + tułów lub ręce + tułów) - <strong>160 zł</strong> / <strong>120 zł</strong></li>
  </ul>
  <p>Czas trwania zabiegu: <strong>30–45 minut</strong></p>
  <p>Terapia dobierana indywidualnie w zależności od potrzeb i stanu organizmu.</p>
</section>

<section id="pulsing-cennik">
  <h2>Pulsing</h2>
  <ul>
    <li>Pojedyńcza sesja Pulsingu - <strong><del>160 zł</del> 140 zł</strong></li>
  </ul>
  <p>Czas trwania zabiegu: <strong>50 minut</strong></p>
 
</section>

<section id="lampaTDP-cennik">
  <h2>Lampa TDP</h2>
  <ul>
    <li>Nagrzewanie Lampą TDP - <strong>50 zł</strong></li>
  </ul>
  <p>Czas trwania: <strong>30-60 minut</strong></p>
 
</section>

<section id="swiatlo-cennik">
  <h2>Terapia Światłem</h2>
  <ul>
    <li>Podstawowa sesja terapii światłem - <strong>80 zł</strong></li>
    <li>Holistyczna sesja terapii światłem - <strong>120 zł</strong></li>
  </ul>
  <p>Czas trwania:</p>
  <ul>
    <li>Podstawowa - <strong>30 minut</strong></li>
    <li>Holistyczna - <strong>40–50 minut</strong></li>
  </ul>
</section>

<section id="dzwiek-cennik">
  <h2>Sesja Dźwięku</h2>
  <ul>
    <li>Pojedyncza sesja dźwięku - <strong>80 zł</strong></li>
  </ul>
  <p>Czas trwania: <strong>30 minut</strong></p>
</section>



</div>



        </>
    );
}

export default PricingPage;
