const OtherServicesPage = () => {
    return (
        <>
            <section id="tabs-1" className="wide-100 tabs-section division">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">


                            {/* TABS NAVIGATION */}
                            <div id="tabs-nav" className="list-group text-center">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist"
                                    style={{justifyContent: 'center'}}
                                >
                                    {/* TAB-1 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a className="nav-link active" id="tab1-list" data-toggle="pill" href="#tab-1"
                                           role="tab"
                                           aria-controls="tab-1" aria-selected="true">
                                            Odchudzanie i kontrola wagi
                                        </a>
                                    </li>

                                    {/* TAB-2 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a className="nav-link" id="tab2-list" data-toggle="pill" href="#tab-2"
                                           role="tab"
                                           aria-controls="tab-2" aria-selected="false">
                                            Wsparcie dla par starających się o dziecko
                                        </a>
                                    </li>

                                    {/* TAB-3 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a className="nav-link" id="tab3-list" data-toggle="pill" href="#tab-3"
                                           role="tab"
                                           aria-controls="tab-3" aria-selected="false">
                                            Oczyszczanie organizmu
                                        </a>
                                    </li>

                                    {/* TAB-4 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a className="nav-link" id="tab4-list" data-toggle="pill" href="#tab-4"
                                           role="tab"
                                           aria-controls="tab-4" aria-selected="false">
                                            Wsparcie dla kobiet w ciąży
                                        </a>
                                    </li>

                                    {/* TAB-4 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a className="nav-link" id="tab5-list" data-toggle="pill" href="#tab-5"
                                           role="tab"
                                           aria-controls="tab-5" aria-selected="false">
                                            Prawidłowa suplementacja
                                        </a>
                                    </li>

                                    {/* TAB-4 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a className="nav-link" id="tab6-list" data-toggle="pill" href="#tab-6"
                                           role="tab"
                                           aria-controls="tab-6" aria-selected="false">
                                            Poprawa koncentracji i pamięci
                                        </a>
                                    </li>

                                    {/* TAB-4 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a className="nav-link" id="tab7-list" data-toggle="pill" href="#tab-7"
                                           role="tab"
                                           aria-controls="tab-7" aria-selected="false">
                                            Wsparcie w chorobach neurodegeneracyjnych
                                        </a>
                                    </li>

                                    {/* TAB-4 LINK */}
                                    <li className="nav-item icon-xs">
                                        <a className="nav-link" id="tab8-list" data-toggle="pill" href="#tab-8"
                                           role="tab"
                                           aria-controls="tab-8" aria-selected="false">
                                            Wsparcie odporności dzieci
                                        </a>
                                    </li>
                                </ul>

                            </div>
                            {/* END TABS NAVIGATION */}


                            {/* TABS CONTENT */}
                            <div className="tab-content" id="pills-tabContent">
                                {/* TAB-1 CONTENT */}
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel"
                                     aria-labelledby="tab1-list">
                                    <div className="row d-flex align-items-center">
                                        {/* TAB-1 IMAGE */}
                                        <div className="col-lg-6">
                                            <div className="tab-img">
                                                <img className="img-fluid" src="/images/odchudzanie.jpg" alt="tab-image"/>
                                            </div>
                                        </div>


                                        {/* TAB-1 TEXT */}
                                        <div className="col-lg-6">
                                            <div className="txt-block pc-30">

                                                {/* Title */}
                                                <h3 className="h3-md steelblue-color">Odchudzanie i kontrola wagi</h3>

                                                {/* Text */}
                                                <p className="mb-30">
                                                    Podstawą rozpoczęcia wspólnej pracy jest ogólna ocena stanu
                                                    organizmu,
                                                    zapoznanie się z dotychczasowymi wynikami, a także wnikliwe
                                                    przyjrzenie się
                                                    pracy układu pokarmowego, hormonalnego oraz nerwowego.
                                                </p>
                                                <p>

                                                    Często nadwaga to wynik stanu naszego umysłu na daną chwilę –
                                                    zajadasz
                                                    emocje?

                                                </p>

                                                <p>

                                                    <b>Do procesu odchudzania podchodzę w sposób holistyczny</b> – biorę
                                                    pod
                                                    uwagę styl życia jaki prowadzisz, jak śpisz oraz w jaki sposób
                                                    spędzasz
                                                    czas.

                                                </p>

                                                <p>

                                                    W przypadku niedoborów witamin i minerałów dobieram odpowiednią
                                                    suplementację – odpowiednio odżywiony organizm nie woła przekąsek,
                                                    ani
                                                    cukru.

                                                </p>

                                                {/*												&lt;!&ndash; Button &ndash;&gt;*/}
                                                {/*												<a href="service-1.html" class="btn btn-blue blue-hover mt-30">View More Details</a>*/}

                                            </div>
                                        </div>
                                        {/* END TAB-1 TEXT */}


                                    </div>
                                </div>
                                {/* END TAB-1 CONTENT */}


                                {/* TAB-2 CONTENT */}
                                <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2-list">
                                    <div className="row d-flex align-items-center">
                                        {/* TAB-2 IMAGE */}
                                        <div className="col-lg-6">
                                            <div className="tab-imgs">
                                                <img className="img-fluid" src="/images/para.jpg" alt="tab-image"/>
                                            </div>
                                        </div>

                                        {/* TAB-2 TEXT */}
                                        <div className="col-lg-6">
                                            <div className="txt-block pc-30">

                                                {/* Title */}
                                                <h3 className="h3-md steelblue-color">Wsparcie dla par starających się o
                                                    dziecko</h3>

                                                {/* Text */}
                                                <p className="mb-30">
                                                    W obecnych czasach ilość par, które napotykają na problem z
                                                    posiadaniem
                                                    potomstwa rośnie i obecnie 1/4 spośród nich musi mierzyć się z
                                                    problemem
                                                    niepłodności.
                                                </p>

                                                <p>

                                                    Styl życia, hormony, czynniki genetyczne, zakażenia układu
                                                    moczowo-płciowego, czy choroby ogólnoustrojowe – to tylko część
                                                    czynników,
                                                    które są problemem przy staraniu się o dzieci.

                                                </p>

                                                <p>

                                                    <b>Jest jeszcze jeden bardzo ważny punkt – niedożywienie
                                                        organizmu.</b>

                                                </p>

                                                <p>
                                                    Holistyczne spojrzenie na ten problem oraz odpowiednia profilaktyka
                                                    jest
                                                    niezbędna w celu ustalenia odpowiedniej ścieżki działania.
                                                </p>
                                            </div>
                                        </div>
                                        {/* END TAB-2 TEXT */}
                                    </div>
                                </div>
                                {/* END TAB-2 CONTENT */}


                                {/* TAB-3 CONTENT */}
                                <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab3-list">
                                    <div className="row d-flex align-items-center">


                                        {/* TAB-3 IMAGE */}
                                        <div className="col-lg-6">
                                            <div className="tab-img">
                                                <img className="img-fluid" src="/images/oczyszczanie.jpg" alt="tab-image"/>
                                            </div>
                                        </div>

                                        {/* TAB-3 TEXT */}
                                        <div className="col-lg-6">
                                            <div className="txt-block pc-30">

                                                {/* Title */}
                                                <h3 className="h3-md steelblue-color">Oczyszczanie organizmu</h3>

                                                {/* Text */}
                                                <p className="mb-30">
                                                    Żadne, nawet najbardziej restrykcyjne diety, nie przyniosą
                                                    oczekiwanych
                                                    rezultatów, jeżeli nasz organizm jest zanieczyszczony, praca
                                                    przewodu
                                                    pokarmowego nie jest wyregulowana oraz posiada złogi i niedobory na
                                                    poziomie
                                                    komórkowym (aminokwasów, minerałów, witamin).
                                                </p>

                                                <p>
                                                    Program CLEAN 9 został stworzony po to, by pomóc w oczyszczeniu
                                                    organizmu ze
                                                    szkodliwych konserwantów i substancji chemicznych, a jednocześnie
                                                    zapoczątkować proces spalania nadmiaru tłuszczu.
                                                </p>

                                                <p>
                                                    CLEAN 9 to dziewięciodniowy plan, którego rezultaty często zaskakują
                                                    nawet
                                                    tych najbardziej opornych.
                                                </p>
                                            </div>
                                        </div>
                                        {/* END TAB-3 TEXT */}
                                    </div>
                                </div>
                                {/* END TAB-3 CONTENT */}

                                {/* TAB-4 CONTENT */}
                                <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="tab4-list">
                                    <div className="row d-flex align-items-center">


                                        {/* TAB-4 IMAGE */}
                                        <div className="col-lg-6">
                                            <div className="tab-img">
                                                <img className="img-fluid" src="/images/ciaza.jpg" alt="tab-image"/>
                                            </div>
                                        </div>


                                        {/* TAB-4 TEXT */}
                                        <div className="col-lg-6">
                                            <div className="txt-block pc-30">

                                                {/* Title */}
                                                <h3 className="h3-md steelblue-color">Wsparcie dla kobiet w ciąży</h3>

                                                {/* Text */}
                                                <p className="mb-30">
                                                    Ciąża to specjalny czas w życiu kobiety, który wymaga specjalnego
                                                    zajęcia
                                                    się sobą i zmiany sposobu odżywiania.
                                                </p>

                                                <p>
                                                    Szczególnie ważna jest odpowiednia suplementacja, która pomoże
                                                    wzbogacić
                                                    dietę o składniki odżywcze, które bardzo ciężko pokryć wyłącznie
                                                    jedzeniem.
                                                </p>

                                                <p>
                                                    Odpowiedni dobór żywności oraz naturalnych produktów higieny
                                                    osobistej
                                                    dopasowane indywidualnie pozwolą na kompleksowe zadbanie o Ciebie i
                                                    Twoje
                                                    dziecko.
                                                </p>

                                                <p>
                                                    Działam we współpracy z Holistycznym Gabinetem Kosmetycznym –
                                                    będziesz miała
                                                    pewność, że jesteś pod opieką matki natury.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="tab-5" role="tabpanel" aria-labelledby="tab5-list">
                                    <div className="row d-flex align-items-center">
                                        {/* TAB-4 IMAGE */}
                                        <div className="col-lg-6">
                                            <div className="tab-img">
                                                <img className="img-fluid" src="/images/suple.jpg" alt="tab-image"/>
                                            </div>
                                        </div>


                                        {/* TAB-4 TEXT */}
                                        <div className="col-lg-6">
                                            <div className="txt-block pc-30">

                                                {/* Title */}
                                                <h3 className="h3-md steelblue-color">Prawidłowa suplementacja</h3>

                                                {/* Text */}
                                                <p className="mb-30">
                                                    Zadaniem suplementacji diety jest uzupełnienie niedoborów. Nie
                                                    zastąpią one
                                                    jednak prawidłowego i racjonalnego sposobu odżywiania.
                                                </p>

                                                <p>

                                                    W tym przypadku najważniejsze jest odpowiednie rozeznanie – z jakimi
                                                    niedoborami mamy do czynienia, co jest ich przyczyną, jak pracują
                                                    poszczególne układy w naszym ciele na czele z układem pokarmowym i
                                                    jelitami.

                                                </p>

                                                <p>

                                                    Analiza oparta jest na wynikach podstawowych badań.

                                                </p>

                                                <p>

                                                    Na ich podstawie mogę zaproponować Ci wybór odpowiednich suplementów
                                                    certyfikowanych firm z wieloletnim doświadczeniem na rynku.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="tab-6" role="tabpanel" aria-labelledby="tab6-list">
                                    <div className="row d-flex align-items-center">
                                        {/* TAB-4 IMAGE */}
                                        <div className="col-lg-6">
                                            <div className="tab-img">
                                                <img className="img-fluid" src="/images/pamiec.jpg" alt="tab-image"/>
                                            </div>
                                        </div>


                                        {/* TAB-4 TEXT */}
                                        <div className="col-lg-6">
                                            <div className="txt-block pc-30">

                                                {/* Title */}
                                                <h3 className="h3-md steelblue-color">Poprawa koncentracji i
                                                    pamięci</h3>

                                                {/* Text */}
                                                <p className="mb-30">
                                                    Ciągły stres, pośpiech, niewyspanie, wieczne zmęczenie, zła dieta i
                                                    odwodnienie mocno odbijają się na pracy naszego umysłu.
                                                </p>

                                                <p>
                                                    Za pomocą odpowiednio dobranej naturalnej suplementacji wyrównujemy
                                                    niedobory składników odżywczych dla naszego mózgu, wzroku i układu
                                                    nerwowego.
                                                </p>

                                                <p>
                                                    Dodatkowo dieta bogata w witaminy z grupy B-kasze, ryby i jajka
                                                    dobrym
                                                    źródłem lecytyny jak również dobre tłuszcze, aktywność fizyczna,
                                                    spacery,
                                                    spokojny sen i gimnastyka umysłu to pomoc codzienna i wdrożenie
                                                    dobrych
                                                    nawyków.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="tab-7" role="tabpanel" aria-labelledby="tab7-list">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-6">
                                            <div className="tab-img">
                                                <img className="img-fluid" src="/images/alzheimer.png" alt="tab-image"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="txt-block pc-30">
                                                <h3 className="h3-md steelblue-color">Wsparcie w chorobach
                                                    neurodegeneracyjnych</h3>

                                                <p>
                                                    Choroby neurodegeneracyjnych to duża grupa zaburzeń związanych z
                                                    uszkodzeniem komórek nerwowych po środkowym układzie nerwowym.
                                                </p>

                                                <p>
                                                    Wśród nich znajdują się choroby takie jak: choroba Alzheimera,
                                                    choroba
                                                    Parkinsona, stwardnienie rozsiane, stwardnienie zanikowe boczne,
                                                    choroba
                                                    Huntingtona, choroba Creutzfeldta-Jakoba, choroba Gravesa-Basedowa.
                                                </p>

                                                <p>
                                                    W gabinecie proponuję szerokie wsparcie odnośnie indywidualnie
                                                    dobranej suplementacji, jak również
                                                    dobór odpowiedniej <b>terapii konopnej</b>.
                                                </p>

                                                <p>
                                                    Jestem certyfikowanym doradcą terapii konopnej w ujęciu <b>CBD</b>.
                                                </p>

                                                <p>
                                                    Oferuję indywidualny dobór oleju CBD i darmowe konsultacje.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="tab-8" role="tabpanel" aria-labelledby="tab8-list">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-6">
                                            <div className="tab-img">
                                                <img className="img-fluid" src="/images/matka_z_dzieckiem.png" alt="tab-image"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="txt-block pc-30">
                                                <h3 className="h3-md steelblue-color">Wsparcie odporności dzieci</h3>

                                                <p>
                                                    Współczesne dzieci są narażone na wiele czynników, które osłabiają
                                                    ich
                                                    odporność.
                                                </p>

                                                <p>
                                                    Wielogodzinne przebywanie w zamkniętych pomieszczeniach, brak ruchu,
                                                    niewłaściwa dieta, stres, brak snu, zanieczyszczenie środowiska, a
                                                    także
                                                    nadmiar cukru i chemii w żywności.
                                                </p>

                                                <p>
                                                    W gabinecie proponuję szerokie wsparcie odnośnie indywidualnie
                                                    dobranej suplementacji, jak również
                                                    dobór odpowiedniej <b>terapii konopnej</b>.
                                                </p>

                                                <p>
                                                    Jestem certyfikowanym doradcą terapii konopnej w ujęciu <b>CBD</b>.
                                                </p>

                                                <p>
                                                    Oferuję indywidualny dobór oleju CBD i darmowe konsultacje.
                                                </p>

                                                <p>
                                                    Oferuję również dobór kierunku żywieniowego dla dzieci z alergiami.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OtherServicesPage;
