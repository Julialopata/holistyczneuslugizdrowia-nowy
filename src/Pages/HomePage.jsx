import React from 'react'

const HomePage = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/a.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block"
                             style={{color: 'rgb(255, 255, 255)', position: 'absolute', top: '230px', left: '50%', transform: 'translateX(-50%)'}}>
                            <h5 style={{fontWeight: 'bold', textShadow: '10px 10px 12px rgba(0, 0, 0, 0.979)', fontSize: '40px'}}>Holistyczne
                                Usługi Zdrowia Małgorzata Salamucha</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/a1.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block"
                             style={{color: 'rgb(255, 255, 255)', position: 'absolute', top: '230px', left: '50%', transform: 'translateX(-50%)'}}>
                            <h5 style={{fontWeight: 'bold', textShadow: '10px 10px 12px rgb(5, 2, 38)', fontSize: '40px'}}>Holistyczne
                                Usługi Zdrowia Małgorzata Salamucha</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/*Strzałki nawigacji*/}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly"
                    style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '0'}}
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly"
                    style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '0'}}
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/images/FGZ1.jpg" className="img-fluid" alt="Zdjęcie 1"/>
                        </div>
                        <div className="col-md-8">
                            <div className="text-center">
                                <h2 className="fs28px">Firma Godna Zaufania</h2>
                                <br/>
                                <p className="fs22px">Z ogromną radością i dumą pragnę podzielić się wspaniałą
                                    wiadomością – moja firma Holistyczne Usługi Zdrowia<br/>
                                    Została uhonorowana prestiżowym wyróżnieniem "Firma Godna Zaufania".<br/>
                                    Nie byłoby tego wyróżnienia gdyby nie moi klienci.<br/>
                                    Dla mnie to nie tylko zaszczyt, ale również potwierdzenie, że jeśli robimy coś z
                                    pasją i miłością inni nas doceniają.<br/>
                                    Dziękuję za zaufanie, za wszystkie opinie. Doceniam każdy głos który motywuje i
                                    napędza do rozwoju, szukania jeszcze lepszych rozwiązań.<br/>
                                    Zapraszam do korzystania z szerokiej oferty gabinetu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br/>
            <br/>
            <br/>
            <br/>

            {/*Sekcja "O mnie"*/}
            <section id="about-5" className="pt-100 pb-100 about-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/*TEXT BLOCK*/}
                        <div className="col-lg-6">
                            <div className="txt-block pc-30 wow fadeInUp about-me-some-styles" data-wow-delay="0.4s">
                                {/*Section ID*/}
                                <span className="section-id blue-color">O mnie</span>
                                {/*Title*/}
                                <h3 className="h3-md steelblue-color">O mnie</h3>
                                <p><strong>Małgorzata Salamucha jestem naturopatą, holistycznym doradcą żywieniowym,
                                    doradcą suplementacji, doradcą konopnym w ujęciu CBD, doradcą hydroterapii w
                                    obszarze ,,żywej wody”. Kod zawodu uzyskałam w Polskim Centrum Szkoleniowym w
                                    Rybniku.</strong></p>
                                <p>Specjalizację - doradca konopny w ujęciu CBD ukończyłam w Instytytucie Rozwoju i
                                    Nauki WST.S.A. Ustawicznie pogłębiam swoją wiedzę poprzez szkolenia i kursy - między
                                    innymi organizowane przez Mauricz Training Center.</p>
                                    <p> Wywodzę się z tzw. "białej medycyny" - studiowałam analitykę medyczną. Los
                                        jednak tak pokierował moim życiem, że szukając rozwiązań zdrowotnych dla siebie
                                        i rodziny doceniłam medycynę niekonwencjonalną i od tej pory zgłębiam jej
                                        tajniki do dziś.</p>
                                    <p>Moje motto to: "Dobrem należy się dzielić". Kiedyś, gdy naprawdę tego
                                        potrzebowałam - uzyskałam pomoc - a teraz Ja pomaga kolejnym osobom.</p>
                                <p>KOMPETENCJE:</p>
                                <ul>
                                    <li><span><i className="fas fa-check-circle"></i></span> Zawodowy Naturopata z
                                        informodiagnostyką i informoterapią
                                    </li>
                                    <li><span><i className="fas fa-check-circle"></i></span> Doradca dietetyczny i
                                        holistyczny doradca żywieniowy
                                    </li>
                                    <li><span><i className="fas fa-check-circle"></i></span> Doradca konopny w ujęciu
                                        CBD, doradca hydroterapii - "żywa woda"
                                    </li>
                                    <li><span><i className="fas fa-check-circle"></i></span> Prowadzę warsztaty zdrowia
                                        i urody.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*IMAGE BLOCK*/}
                        <div className="col-lg-6">
                            <div className="about-img wow fadeInUp text-center about-me-image-container" data-wow-delay="0.6s">
                                <img className="img-fluid larger-image" src="/images/o mnie.jpg" alt="about-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Sekcja Galerii*/}
            <section id="gallery" className="pt-100 pb-100 gallery-section division" style={{backgroundColor: '#f5f5f5'}}>
                <div className="container">
                    {/*Nagłówek Sekcji*/}
                    <div className="section-header text-center">
                        <h2 className="h2-md">Certyfikaty</h2>
                        <br/>
                    </div>

                    {/*Zdjęcia*/}
                    <div className="row gallery-row position-relative" style={{overflowX: 'hidden', whiteSpace: 'nowrap'}}>
                        <div className="col-md-1 d-flex align-items-center justify-content-center"></div>

                        {/*Zdjęcia*/}
                        <div className="col-md-10">
                            <div className="row justify-content-center">
                                {/*Zdjęcie 1*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c1.jpg" data-lightbox="gallery" data-title="Zdjęcie 1">
                                            <img className="img-fluid gallery-image" src="/images/c1.jpg"
                                                 alt="Zdjęcie 1"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 2*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c2.jpg" data-lightbox="gallery" data-title="Zdjęcie 2">
                                            <img className="img-fluid gallery-image" src="/images/c2.jpg"
                                                 alt="Zdjęcie 2"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 3*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c3.jpg" data-lightbox="gallery" data-title="Zdjęcie 3">
                                            <img className="img-fluid gallery-image" src="/images/c3.jpg"
                                                 alt="Zdjęcie 3"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 4*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c4.jpg" data-lightbox="gallery" data-title="Zdjęcie 4">
                                            <img className="img-fluid gallery-image" src="/images/c4.jpg"
                                                 alt="Zdjęcie 4"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 5*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c5.jpg" data-lightbox="gallery" data-title="Zdjęcie 5">
                                            <img className="img-fluid gallery-image" src="/images/c5.jpg"
                                                 alt="Zdjęcie 5"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 6*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c6.jpg" data-lightbox="gallery" data-title="Zdjęcie 6">
                                            <img className="img-fluid gallery-image" src="/images/c6.jpg"
                                                 alt="Zdjęcie 6"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 7*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c7.jpg" data-lightbox="gallery" data-title="Zdjęcie 7">
                                            <img className="img-fluid gallery-image" src="/images/c7.jpg"
                                                 alt="Zdjęcie 7"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 8*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c8.jpg" data-lightbox="gallery" data-title="Zdjęcie 8">
                                            <img className="img-fluid gallery-image" src="/images/c8.jpg"
                                                 alt="Zdjęcie 8"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 9*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c9.jpg" data-lightbox="gallery" data-title="Zdjęcie 9">
                                            <img className="img-fluid gallery-image" src="/images/c9.jpg"
                                                 alt="Zdjęcie 9"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 10*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c10.jpg" data-lightbox="gallery" data-title="Zdjęcie 10">
                                            <img className="img-fluid gallery-image" src="/images/c10.jpg"
                                                 alt="Zdjęcie 10"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 11*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c11.jpg" data-lightbox="gallery" data-title="Zdjęcie 11">
                                            <img className="img-fluid gallery-image" src="/images/c11.jpg"
                                                 alt="Zdjęcie 11"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 12*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c12.jpg" data-lightbox="gallery" data-title="Zdjęcie 12">
                                            <img className="img-fluid gallery-image" src="/images/c12.jpg"
                                                 alt="Zdjęcie 12"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 13*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c13.jpg" data-lightbox="gallery" data-title="Zdjęcie 13">
                                            <img className="img-fluid gallery-image" src="/images/c13.jpg"
                                                 alt="Zdjęcie 13"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 14*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c14.jpg" data-lightbox="gallery" data-title="Zdjęcie 14">
                                            <img className="img-fluid gallery-image" src="/images/c14.jpg"
                                                 alt="Zdjęcie 14"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 15*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c15.jpg" data-lightbox="gallery" data-title="Zdjęcie 15">
                                            <img className="img-fluid gallery-image" src="/images/c15.jpg"
                                                 alt="Zdjęcie 15"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 16*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c16.jpg" data-lightbox="gallery" data-title="Zdjęcie 16">
                                            <img className="img-fluid gallery-image" src="/images/c16.jpg"
                                                 alt="Zdjęcie 16"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 17*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c17.jpg" data-lightbox="gallery" data-title="Zdjęcie 17">
                                            <img className="img-fluid gallery-image" src="/images/c17.jpg"
                                                 alt="Zdjęcie 17"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 18*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c18.jpg" data-lightbox="gallery" data-title="Zdjęcie 18">
                                            <img className="img-fluid gallery-image" src="/images/c18.jpg"
                                                 alt="Zdjęcie 18"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 19*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c19.jpg" data-lightbox="gallery" data-title="Zdjęcie 19">
                                            <img className="img-fluid gallery-image" src="/images/c19.jpg"
                                                 alt="Zdjęcie 19"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 20*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c20.jpg" data-lightbox="gallery" data-title="Zdjęcie 20">
                                            <img className="img-fluid gallery-image" src="/images/c20.jpg"
                                                 alt="Zdjęcie 20"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 21*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c21.jpg" data-lightbox="gallery" data-title="Zdjęcie 21">
                                            <img className="img-fluid gallery-image" src="/images/c21.jpg"
                                                 alt="Zdjęcie 21"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 22*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c22.jpg" data-lightbox="gallery" data-title="Zdjęcie 22">
                                            <img className="img-fluid gallery-image" src="/images/c22.jpg"
                                                 alt="Zdjęcie 22"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 23*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c23.jpg" data-lightbox="gallery" data-title="Zdjęcie 23">
                                            <img className="img-fluid gallery-image" src="/images/c23.jpg"
                                                 alt="Zdjęcie 23"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="decoration">
                            <div className="circle-1"></div>
                            <div className="circle-2"></div>
                            <div className="circle-3"></div>
                            <div className="circle-4"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
)
}

export default HomePage