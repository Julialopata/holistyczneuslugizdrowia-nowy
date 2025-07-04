import { Helmet } from 'react-helmet-async';

const HealthAndBeautyWorkshopsPage = () => {
    return (
        <>
            <Helmet>
                <title>Warsztaty Zdrowia i Urody | Holistyczne Usługi Zdrowia Sosnowiec</title>
                <meta name="keywords" content="warsztaty zdrowia i urody, warsztaty kosmetyczne, warsztaty zdrowotne, warsztaty dla kobiet, warsztaty grupowe, warsztaty indywidualne, pielęgnacja naturalna, kosmetyka holistyczna, kosmetyka endogenna, nawilżenie skóry, nawodnienie skóry, elastyczność skóry, badanie skóry, maseczki naturalne, naturalne produkty kosmetyczne, warsztaty relaksacyjne, aromaterapia, olejki eteryczne, kameralne warsztaty, warsztaty dla przyjaciółek, warsztaty dla rodziny, pielęgnacja od środka, holistyczne podejście do urody, doradztwo zdrowotne, kobiece sprawy, zdrowie kobiet, piękna skóra, regeneracja skóry, warsztaty wellness, warsztaty spa, warsztaty pielęgnacyjne, naturalna pielęgnacja twarzy, diagnostyka skóry, personalizowane maseczki, warsztaty urody sosnowiec, warsztaty zdrowia śląsk, holistyczna pielęgnacja, endogenna kosmetyka, warsztaty relaksacyjne z muzyką, maksymalnie 5 osób, bon na warsztaty, prezent warsztaty urody" />
                <meta name="description" content="Kameralne warsztaty zdrowia i urody w Sosnowcu. Sprawdzenie poziomu nawilżenia skóry, dobór naturalnych maseczek, wiedza o kosmetyce holistycznej. Warsztaty indywidualne lub grupowe do 5 osób." />
            </Helmet>
            <section id="info-4" className="wide-100 info-section division">
                <div className="container">
                    {/* TOP ROW */}
                    <div className="top-row mb-80">
                        <div className="row d-flex align-items-center">
                            {/* INFO IMAGE */}
                            <div className="col-lg-6">
                                <div className="info-4-img text-center wow fadeInUp" data-wow-delay="0.6s">
                                    <img className="img-fluid" src="/images/1 (40).jpg" alt="info-image"/>
                                </div>
                            </div>

                            {/* INFO TEXT */}
                            <div className="col-lg-6">
                                <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.4s">
                                    {/* Title */}
                                    <h3 className="h3-md steelblue-color">Warsztaty zdrowia i urody</h3>

                                    {/* Text */}
                                    <p>
                                        Szukasz sposobu na wspólny czas z koleżankami, mamą, siostrą? Lubicie dbać o
                                        swoje
                                        zdrowie, aby jak najdłużej je zachować? Mamy dla Was specjalną ofertę -
                                        warsztaty
                                        zdrowia i urody! Zaopiekuj się sobą w sposób naturalny.

                                        Co Cię czeka na takich warsztatach?
                                    </p>

                                    {/* Options List */}
                                    <div className="row">

                                        <div className="col-xl-6">
                                            {/* Option #1 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color"><i
                                                    className="fas fa-angle-double-right"></i>
                                                </div>
                                                <p className="p-sm">Sprawdzę poziom nawilżenia, nawodnienia oraz
                                                    elastyczność Twojej
                                                    skóry.</p>
                                            </div>


                                            {/* Option #4 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color"><i
                                                    className="fas fa-angle-double-right"></i>
                                                </div>
                                                <p className="p-sm">Dowiesz się na temat kosmetyki holistycznej oraz
                                                    endogennej -
                                                    czyli jak zadbać o siebie od środka, aby zawsze cieszyć sie piękną
                                                    skórą.
                                                    Piękno drzemie w każdym z nas, czasem trzeba mu tylko pomóc rozpalić
                                                    iskrę,
                                                    aby uaktywnić pełny blask.</p>
                                            </div>
                                        </div>

                                        <div className="col-xl-6">
                                            {/* Option #5 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color"><i
                                                    className="fas fa-angle-double-right"></i>
                                                </div>
                                                <p className="p-sm">Spora dawka wiedzy o naszych kobiecych sprawach
                                                    okiem
                                                    holistycznego doradcy zdrowia.</p>
                                            </div>


                                            {/* Option #2 */}
                                            <div className="box-list">
                                                <div className="box-list-icon blue-color"><i
                                                    className="fas fa-angle-double-right"></i>
                                                </div>
                                                <p className="p-sm">Dobiorę maseczki na bazie naturalnych produktów,
                                                    dostosowane do
                                                    potrzeb Twojej skóry.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        Warsztaty przeprowadzam w kameralnych gronie bliskich sobie osób, z muzyczką
                                        relaksacyjną w tle i z pięknym zapachem olejków oraz w towarzystwie żywego ognia
                                        w
                                        piecyku.
                                    </p>

                                    <p>
                                        Warsztaty mogą zostać przeprowadzone indywidualne, jak i w grupie max. 5 osób.
                                        Cena podanego bonu jest podana za 1 osobę.
                                    </p>
                                </div>
                            </div>
                            {/* END TEXT BLOCK */}
                        </div>
                        {/* End row */}
                    </div>
                    {/* END TOP ROW */}
                </div>
                {/* End container */}
            </section>
        </>
    );
}

export default HealthAndBeautyWorkshopsPage;