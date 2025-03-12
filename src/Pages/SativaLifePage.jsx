import React from "react";
import "../App.css";

const SativaLifePage = () => {
    return (
        <>
            <section className="reasons">
                <h2>Powody do zastosowania produktów konopnych z firmą Sativa Life:</h2>
                <ul>
                    <li>Redukują stres</li>
                    <li>Ułatwiają zasypianie</li>
                    <li>Działają przeciwzapalnie</li>
                    <li>Wspomagają rzucenie palenia</li>
                    <li>Przydatne są w kuchni</li>
                    <li>Nie są psychoaktywne</li>
                    <li>Ograniczają wchłanianie szkodliwych substancji</li>
                    <li>Korzystnie wpływają na skórę oraz urodę</li>
                </ul>
            </section>
            <br/>
            <br/>
            <br/>
            <section className="video-section">
                <div className="video-container">
                    <video id="video" poster="/images/first-frame.jpg" controls style={{display: 'none'}}>
                        <source src="https://www.sativalife.eu/pages/assets/pages/home/video.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-wrapper">
    <img src="/images/sativa_vid_placeholder.png" alt="Video placeholder" id="video-placeholder"/>
    <button className="play-button" id="play-button" onClick={() => {const video = document.getElementById('video');
                        const placeholder = document.getElementById('video-placeholder');
                        const playButton = document.getElementById('play-button');

                        placeholder.style.display = 'none';
                        playButton.style.display = 'none';
                        video.style.display = 'block';

                        video.play();  }}>
        ▶
    </button>
</div>
</div>
                  
    
            </section>
            <br/>

            <section className="cbd-section">
                <div className="cbd-text">
                    <p><strong>CBD charakteryzuje się zupełną nietoksycznością i brakiem działań ubocznych.</strong> Po
                        pierwsze można stosować go również u dzieci i osób w podeszłym wieku oraz u chorych w ciężkim
                        stanie a po drugie, nie ma niebezpieczeństwa przedawkowania, nawet po przyjęciu bardzo dużej
                        ilości. Interesujące jest też to, że korzystne działania CBD mogą objawić się już po przyjęciu
                        bardzo niewielkich dawek.</p>
                    <p>Dlatego też postawiłam na Polską firmę, która wykorzystuje do produkcji konopie siewne pochodzące
                        z polskich ekologicznych upraw, które są jednymi z najczystszych upraw konopi w Europie, wolnych
                        od pestycydów, metali ciężkich i GMO.</p>
                    <p><strong>Potencjał firmy to ludzie</strong></p>
                    <p><em>Pomagamy żyć pięknie</em></p>
                    <p>Podejmij współpracę z Sativa Life</p>
                </div>
            </section>


            <section className="sativa-life-section">
                <h2>W Sativa Life dajemy naszym klientom nadzieję na lepsze, zdrowsze życie nawet w podeszłym wieku, na
                    dzielenie go z bliskimi przez wiele lat.</h2>
                <p>Dodatkowo mając swoje indywidualne konto czekają na Ciebie dodatkowe korzyści:</p>

                <ul>
                    <li><b>Zostań klientem, zarejestruj się a otrzymasz swój indywidualny numer. Zakupu dokonujesz
                        internetowo z dostawą pod same drzwi.</b></li>
                    <li>Masz dostęp do wielu comiesięcznych <b>promocji</b>.</li>
                    <li>Dodatkowo w przeciągu 30 dni od Twojej rejestracji, poleć produkty Sativa Life 4 osobom, a
                        otrzymasz bonus na <b>min. 500 zł</b>.
                    </li>
                    <li>Otrzymujesz również <b>bezpłatne wsparcie swojego doradcy konopnego</b> oraz dostęp do obszernej
                        wiedzy z dodatkowymi informacjami od lekarzy i specjalistów.
                    </li>
                    <li>Zespół ekspertów, posiadający <b>wieloletnie doświadczenie</b>, zawsze jest do Twojej
                        dyspozycji.
                    </li>
                    <li>Pomagając sobie, możesz również zarabiać promując produkty wśród rodziny i znajomych.</li>
                    <li><b>Buduj swój biznes, pomagaj innym żyć pięknie, twórz sieć zadowolonych klientów i
                        współpracowników</b>.
                    </li>
                </ul>
            </section>
            <br/>
            <section className="activity-section">
                <h2>Działalność jest prosta, oparta na przejrzystych zasadach.</h2>
                <p>Nie ponosisz żadnego ryzyka finansowego, możesz sporo zyskać zostając ambasadorem marki Sativa Life
                    Eu.</p>
                <p><b>Zapraszam Cię do mojego zespołu.</b></p>
                <p>Możesz czuć się lepiej, wyglądać lepiej i zarabiać lepiej.</p>

                <div className="activity-list">
                    <div className="activity-tile">
                        <h3>1</h3>
                        <p>Dostajesz od ręki dostęp do działającego od ponad 4 lat modelu biznesowego z uczciwym planem
                            marketingowym i sprawdzonymi, certyfikowanymi produktami.</p>
                    </div>
                    <div className="activity-tile">
                        <h3>2</h3>
                        <p>Zyskujesz możliwość wypracowania dochodu bez ograniczeń. Sativa, pomijając drogie kampanie
                            reklamowe, płaci nam ambasadorom marki premię, gdzie Twój biznes wzrasta globalnie.</p>
                    </div>
                    <div className="activity-tile">
                        <h3>3</h3>
                        <p>Nie ma kosztów inwestycji i ryzyka finansowego. Jedyne co należy zrobić to zakupić produkt o
                            równowartości 20 pkt i rozpocząć podróż ku lepszemu zdrowiu.</p>
                    </div>
                    <div className="activity-tile">
                        <h3>4</h3>
                        <p>To Ty decydujesz w jakim tempie się rozwijasz. Może to być Twój plan B.
                            Jednocześnie stawiając na rozwój możesz otrzymać nowy zawód i być może to będzie Twój plan A.</p>
                    </div>
                    <div className="activity-tile">
                        <h3>5</h3>
                        <p>Możesz skorzystać z wielu programów motywacyjnych jak np. program samochodowy, zagranicznych
                            podróży, lifestyle i innych.</p>
                    </div>
                    <div className="activity-tile">
                        <h3>6</h3>
                        <p>Dochód pasywny, który możesz osiągnąć dzięki działalności grupy, którą zaraziłaś/eś do
                            lepszego zdrowia i życia.</p>
                    </div>
                    
                    <br/>
                    
                    <div className="registration-info">
                        <h3>Jak się zarejestrować z możliwością comiesięcznych zniżek?</h3>
                        <p>W celu konsultacji lub umówienia spotkania zadzwoń lub napisz:</p>
                        <p>Skontaktuj się pod numerem telefonu: <a href="tel:+48791852526"><strong>791 85 25 26</strong></a>
                        </p>
                            <p>Bądź meilowo: <a href="mailto:praktycznasalcia@wp.pl"><strong><span>praktycznasalcia@wp.pl</span></strong></a>
                        </p>
                    </div>
                </div>
            </section>
            <br/>
            <section className="sativa-section">
                <h4>Produkty marki Sativa Life</h4>
                <img src="/images/Sativa strona.png" alt="Sativa Life Produkt"/>
                <a href="https://www.sativalife.eu/app/register/PL0063736">Zobacz produkty marki Sativa Life</a>
            </section>
            <br/>
            <br/>
            <br/>

            <section className="sativa-section">
                <div className="content-wrapper">
                    <div className="text-left">
                        <h2>Olejki firmy Sativa Life</h2>
                        <p>1. Posiadają na opakowaniu odpowiednie oznaczenia zawartości CBD oraz oznaczenie numeru
                            partii.<br/><br/>
                            2. Firma Sativa Life, udostępnia na stronie internetowej certyfikaty sporządzone do każdej
                            partii produktu oddzielnie, do każdego stężenia oddzielnie.<br/><br/>
                            3. Daty wydania certyfikatów są bieżące. Aktualną jednostką certyfikującą produkty firmy
                            Sativa Life jest UMCS (Uniwersytet Marii Curie-Skłodowskiej) w Lublinie.<br/><br/>
                            4. Firma Sativa Life, jest Polską firmą z siedzibą w Krakowie, posiadającą własną produkcję
                            olejków. Możesz zadzwonić do firmy każdego dnia i zapytać o cokolwiek zechcesz, zawsze
                            uzyskasz fachową poradę. Firma działa w obszarze polskiego prawa co ważne jest dla Ciebie w
                            przypadku ewentualnych roszczeń wobec firmy.<br/><br/>
                            5. Firma Sativa Life wykorzystuje do produkcji konopie siewne pochodzące z polskich upraw,
                            które są jednymi z najczystszych upraw konopi w Europie.</p>
                    </div>
                    <div className="image-right">
                        <img src="/images/sativa1.jpg" alt="Zdjęcie 1"/>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="image-left">
                        <img src="/images/sativa2.jpg" alt="Zdjęcie 2"/>
                    </div>
                    <div className="text-right">
                        <p><b>Naturalny Olejek CBD Sativa Life</b> wyprodukowany został metodą ekstrakcji nadkrytycznym
                            CO2 ze starannie wyselekcjonowanych kwiatostanów konopi siewnych.
                            Zastosowana metoda pozwala na uzyskanie związków aktywnych biologicznie o wysokim stężeniu
                            co odpowiada za skuteczność produktu.
                            Suplement diety <b>SATIVA LIFE</b> zawiera, oprócz wysokiej zawartości CBD, pełne spektrum
                            drogocennych związków charakterystycznych dla <b>Cannabis Sativa.</b></p>
                        <div className="list-wrapper">
                            <h5><b>Skład:</b></h5>
                            <ul>
                                <li><i className="fas fa-cannabis"></i> kannabinoidy (CBD, THC, CBG, CBC, CBN, CBV oraz
                                    wiele innych)
                                </li>
                                <br/>
                                <li><i className="fas fa-cannabis"></i> terpeny (mircen, limonen, pinen, kariofilen oraz
                                    wiele innych)
                                </li>
                                <br/>
                                <li><i className="fas fa-cannabis"></i> flawonoidy (kemferol, apigenina, vitexin,
                                    isovitexin, kwercytyna, luteoinin oraz wiele innych)
                                </li>
                                <br/>
                                <li><i className="fas fa-cannabis"></i> pierwiastki śladowe: fosfor, potas, magnez,
                                    wapń, żelazo, sód, mangan
                                </li>
                                <br/>
                                <li><i className="fas fa-cannabis"></i> witaminy: witaminy E i K, tiamina (B1),
                                    ryboflawina (B2)
                                </li>
                                <br/>
                                <li><i className="fas fa-cannabis"></i> a także inne substancje: chlorofil, alkany,
                                    związki azotowe, aminokwasy, cukry, aldehydy, alkohole, ketony, glikozydy, barwniki,
                                    woda oraz bogaty w wielonienasycone kwasy tłuszczowe(omega) olej z nasion konopi.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <p className="centered-text">Dotychczas przeprowadzone badania laboratoryjne wykazują prozdrowotne
                    działania kannabidiolu. Wymieńmy choćby te,
                    które w dzisiejszych czasach najbardziej nas dotyczą: łagodzi różne rodzaje bólu, hamuje rozwój
                    bakterii chorobotwórczych, łagodzi
                    objawy depresji, chroni komórki przed działaniem wolnych rodników, ogranicza bądź likwiduje stan
                    zapalny, zmniejsza napady drgawkowe,
                    zmniejsza skurcze jelit, obniża napięcie naczyń krwionośnych, spowalnia uszkodzenia komórek układu
                    nerwowego, hamuje wzrost komórek
                    nowotworowych.<br/>

                    Biorąc pod uwagę powyższe działania, można polecać zażywanie CBD w następujących dolegliwościach:
                    rak, padaczka, autyzm, stwardnienie rozsiane, borelioza, parkinson, alzheimer, depresja, demencja,
                    lęki, schizofrenia, bezsenność, ból, migreny, astma, jaskra, cukrzyca, reumatyzm, RZS, osteoporoza,
                    miażdżyca, zapalenia, choroba Leśniowskiego - Crohna, uzależnienia, anoreksja, alergie, stres oraz
                    wiele innych.</p>
            </section>
            <br/>
            <br/>
          
            <br/>
            <br />
            <section className="green-header-section">
                <div className="container">
                    <div className="content-wrapper">
                        <div className="text-wrapper">
                        <section className="chlorofil">
                <div className="chlorofil-wrapper">
                    <img src="/images/CHLOROFIL.jpg"/>
                </div>
            </section>
                            <h1>Chlorofil</h1>
                            <p>Jest to produkt premium, wysokiej jakości.<br/>
                                Co wyróżnia nasz produkt na rynku?<br/>
                                Z pewnością zawartość chlorofilu w produkcie!
                                To produkt skoncentrowany, naturalny i bezpieczny.
                                Do spożycia po rozcieńczeniu z wodą.<br/><br/>
                                Chlorofil jako suplement wykazuje właściwości:<br/>
                                ✅regeneracyjne, oczyszczające, wzmacniające, bakteriobójcze, przeciwzapalne,
                                przeciwgrzybicze,<br/>
                                ✅Dostarcza do organizmu magnez.<br/>
                                ✅Jako silny przeciwutleniacz
                                zapobiega powstawaniu wolnych rodników, które powodują starzenie się komórek i
                                przyczyniają się do powstawania wielu chorób, w tym nowotworowych.</p>
                            <div className="list-wrapper">
                                <div className="list-item">
                                    <h3>Chlorofil w płynie (suplement diety) wspomaga pracę układu:</h3>
                                    <p>✅odpornościowego,<br/>
                                        ✅krwionośnego,<br/>
                                        ✅nerwowego,<br/>
                                        ✅pokarmowego,<br/>
                                        ✅przyspiesza metabolizm,<br/>
                                        ✅może pomagać obniżyć poziom cukru we krwi i rozkładać tłuszcze w
                                        organizmie,<br/>
                                        ✅daje uczucie sytości - stąd może być skuteczny w pozbyciu się zbędnych
                                        kilogramów.<br/>
                                        ✅pomaga usuwać nieprzyjemny zapach z jamy ustnej i ciała.<br/>
                                        ✅wpływa na utrzymanie równowagi kwasowo-zasadowej,<br/>
                                        ✅poprawę kondycji skóry,<br/>
                                        ✅oczyszcza organizm poprzez usuwanie toksyn oraz regulowanie pH organizmu,<br/>
                                        ✅wzmacnia odporność, wspomaga walkę z wirusami i bakteriami, zapobiegając
                                        chorobom i zakażeniom,<br/>
                                        ✅wydłuża cykl życia naszych komórek,<br/>
                                        ✅łagodzi podrażnienia skóry i wspomaga jej regenerację,<br/>
                                        ✅wspomaga rozwój korzystnej flory bakteryjnej jelit,<br/>
                                        ✅przyczynia się do redukcji żylaków,<br/>
                                        ✅wspomaga oczyszczanie krwi, limfy i płynów wewnątrzkomórkowych,<br/>
                                        ✅poprawia funkcjonowanie wątroby i jelit,<br/>
                                        ✅koi nerwy i wspomaga redukcję stresu,<br/>
                                        ✅przyczynia się do hamowania rozwoju Candida w przewodzie pokarmowym,<br/>
                                        ✅chroni organizm przed substancjami rakotwórczymi,<br/>
                                        ✅wiąże i usuwa metale ciężkie</p>
                                </div>
                                <div className="list-item">
                                    <h3>Chlorofil jako silna substancja przeciwzapalna może być stosowany przy
                                        schorzeniach takich jak:</h3>
                                    <p>✅artretyzm,<br/>
                                        ✅zapalenie zatok,<br/>
                                        ✅chroniczne zapalenie trzustki,<br/>
                                        ✅stany zapalne skóry,<br/>
                                        ✅zapalenia i owrzodzenia błony śluzowej żołądka i jelit,<br/>
                                        ✅żylaki oraz łagodzenie bolesnych objawów hemoroidów,<br/>
                                        ✅próchnica i choroby dziąseł,<br/>
                                        ✅bóle gardła, ropotok,<br/>
                                        ✅Chlorofil przywraca równowagę kwasowo-zasadową</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>

            <section>
                <div className="zywa-woda-tlo">
                    <br/>
                    <h1 style={{textAlign: 'center', fontFamily: '"Your Decorative Font", cursive', color: '#57c2df'}}
                    >Żywa
                        Woda</h1>
                    <h4 style={{textAlign: 'center', fontFamily: '"Your Decorative Font", cursive', color: '#57c2df'}}><b>Twoje
                        prywatne źródełko naturalnej alkalicznej wody w Twoim domu - Polski produkt</b></h4>
                    <p style={{textAlign: 'center', color: '#57c2df'}}><b>Woda alkaliczna – czym jest i kto powinien ją
                        pić?</b><br/><br/>

                        Nie jest zwykłą wodą źródlaną, której wiele rodzajów spotyka się w sklepach.
                        Jej właściwości lecznicze doceniono blisko 50 lat temu i popularność ta stale rośnie.<br/> Od
                        zwykłej wody różni się odczynem PH.
                        Mowa o wodzie alkalicznej, która jakiś czas temu stała się znana także w
                        Polsce.<br/><b> Dlaczego jest zdrowsza
                            i jakie ma jeszcze właściwości? Czym jest dokładnie woda alkaliczna?</b><br/><br/>

                        Wodę alkaliczną nazywa się często <b>"żywą wodą"</b>. Największą popularność zyskała wśród
                        Japończyków i Koreańczyków,<br/>
                        którzy od wielu lat traktują ją jako leczniczą, wykorzystując w terapii wielu
                        dolegliwości.<br/> Nie jest ona zwykłą wodą,
                        która na co dzień jest dostępna w naszych domach. Tradycyjna kranówka w niczym<br/> nie
                        przypomina wody alkalicznej,
                        ponieważ ma zupełnie inny odczyn.<br/><br/>

                        Woda alkaliczna jest z kolei <b>"wodą strukturalną"</b>. Nazywa się ją tak, ponieważ została
                        stworzona w procesie jonizowania,
                        czyli elektrolizy,<br/> którą można wykonać wtedy, kiedy posiada się odpowiednie urządzenie. Od
                        zwyczajnej wody różni się odczynem PH,<br/>
                        ponieważ jest on większy niż 7,5. W ten sposób określa się miarę kwasowości lub zasadowości.
                        Woda alkaliczna jest wodą zasadową,
                        <b>dlatego<br/> nie zakwasza organizmu, a nawet niweluje objawy zakwaszenia.</b></p>
                    <div style={{textAlign: 'center'}}>
                        <img src="/images/Filtry_nowe.jpg" alt="Zdjęcie 1" style={{width: '300px', height: '200px', margin: '10px'}}/>
                        <img src="/images/zywawoda.jpg" alt="Zdjęcie 2" style={{width: '300px', height: '200px', margin: '10px'}}/>
                        <img src="/images/woda3.png" alt="Zdjęcie 3" style={{width: '300px', height: '200px', margin: '10px'}}/>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <p style={{textAlign: 'center'}}><b>AquaTech+ Jonizator AquaSativa Life v2.0</b> oraz jego
                        pięciostopniowe filtry to idealny sposób na poprawę
                        jakości życia, dzięki stałemu dostępowi do wody alkalicznej w zaciszu własnego domu.<br/>

                        Nasz jonizator to nowoczesne narzędzie do pozyskiwania "żywej" wody alkalicznej. Jonizacja
                        polega na rozdzieleniu z
                        cząsteczek wody związków zasadowych i kwasowych,<br/> pozostawiając w niej w większości te
                        pierwsze. Dzięki temu zyskujemy
                        wodę o podwyższonym pH oraz ujemnym ORP,<br/> co świadczy o obecnej w niej aktywnym wodorze.
                        Mówiąc wprost- jonizator daje
                        nam dostęp do czystej, zdrowej wody, pozbawionej szkodliwych związków,<br/> która nie tylko jest
                        świetnie przyswajalna przez
                        nasz organizm, co daje lepszy efekt nawadniania,<br/> ale również pysznie smakuje- zdziwisz się,
                        jak różny smak ma woda alkaliczna
                        w porównaniu do kranowej czy mineralnej!<br/><br/>


                        <b>AquaTech+ Jonizator AquaSativa Life v2.0</b> to odpowiedź na potrzebę własnego źródełka
                        bieżącej, czystej wody, zdrowej i zdatnej
                        do picia prosto z kranu.<br/> Zajmuje niewiele miejsca i gwarantuje świeżą wodę zawsze, kiedy
                        jej potrzebujesz. Zainstalowanie jest
                        proste i szybkie- z pewnością każdy sobie poradzi. W zestawie znajduje się aż pięć
                        filtrów<br/> usuwających z wody w pierwszej
                        kolejności zabrudzenia „mechaniczne”, takie jak piasek, kamień czy rdza, następnie specjalne
                        wkłady węglowe<br/> usuwają chlor,
                        a dodatkowe wkłady z węgla łupin kokosowych uszlachetniają wodę i poprawiają jej smak oraz
                        usuwają metale ciężkie oraz
                        drobniejsze osady.<br/> Kolejny filtr z membraną kapilarną usuwa zabrudzenia, bakterie i wirusy,
                        a ostatni z nich spełnia
                        najważniejszą rolę- jonizuje wodę .Te szlachetne kamienie i minerały<br/> zawarte w środku-
                        produkują świeżą, żywą i
                        zdrową wodę- w Twoim źródełku prosto z kranu.<br/><br/>


                        <b>W komplecie znajduje się pełny zestaw do samodzielnego montażu. Wężyk, trójnik i wylewka, by
                            od razu móc cieszyć się czystą,
                            świeżą wodą!</b></p>
                </div>
            </section>
            <br/>
            <br/>
            <br/>
            <section className="water-properties">
                <h2>Poznaj właściwości naszej wody!</h2>
                <br/>
                <div className="properties-list">
                    <div className="property">
                        <h3>Czysta i miękka</h3>
                        <p>Nasz system oczyszcza wodę płynącą rurami wodociągu ze wszelkich zebranych po drodze osadów,
                            jak rdza czy piasek.</p>
                    </div>
                    <div className="property">
                        <h3>Smaczna</h3>
                        <p>Dzięki zastosowaniu naturalnych absorbentów, takich jak węgiel z łupin kokosa, Aqua Sativa
                            Life pochłania związki chloru i cząstki gnilne obecne w wodzie rurociągowej, poprawiając jej
                            smak i zapach.</p>
                    </div>
                    <div className="property">
                        <h3>Bez bakterii</h3>
                        <p>Aqua Sativa Life w naturalny sposób, nie pozbawiając wody jej minerałów, oczyszcza wodę z
                            wirusów i bakterii chorobotwórczych.</p>
                    </div>
                    <div className="property">
                        <h3>Alkaliczna</h3>
                        <p>Bez użycia prądu, dokładnie jak w ujęciach źródlanej wody na całym świecie, Aqua Sativa Life
                            naturalnie obniża ORP i podnosi pH wody, pomagając w codziennej walce z zakwaszeniem
                            organizmu i detoksykacją.</p>
                    </div>
                    <div className="property">
                        <h3>Drobnocząsteczkowa</h3>
                        <p>Aqua Sativa Life jonizuje wodę rozbijając jej cząstki na mniejsze, dzięki czemu komórki ciała
                            lepiej ją wchłaniają, poprawiając tym samym procesy metaboliczne i kondycję.</p>
                    </div>
                </div>
                <div className="certificate">
                    <a href="https://sativalife.eu/storage/files/ATEST_AQUASATIVA.pdf" target="_blank">Certyfikat</a>
                </div>
            </section>
            <section className="movie-section">
                <div className="movie-container">
                    <iframe width="600" height="400" src="https://www.youtube.com/embed/KTa_pPojN2s?si=I-7HC5uLOcCFWGkX"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <br/>
                <div className="caption">
                    <p>Współczesne badania dowodzą, że jakośc i długość życia zależa w znaczącym stopniu od naszej
                        codziennej dbałości o zdrowie,<br/>
                        od naszego codziennego postępowania w sferze posiłku, ruchu fizycznego i higieny psychicznej.
                        Zyjemy więc siłą rzeczy nasze
                        ciało ulega<br/> systematycznemu zużyciu. Bez regeneracji trudno oczekiwać poprawy. Podstawą
                        regeneracji jest między innymi
                        alkalizacja organizmu.<br/><b> Możemy to osiągnąć poprzez picie alkalicznej wody.</b><br/><br/>

                        Dlatego też na tej stronie pokazuję Ci jak w kilku krokach można zaopiekować się sobą.<br/><br/>

                        Grunt to podjąć decyzję, że chcę coś zrobić dla siebie.<br/><br/>

                        <b>Uwaga! - brak decyzji, to też decyzja.</b><br/>

                        Zapraszam do holistycznego świata powrotu równowagi zdrowia za pomocą naturalnych metod i
                        narzędzi jakimi dysponuje naturopata.<br/><br/>

                        Z miłością<br/>

                        Małgorzata Salamucha
                        Naturopata.</p>
                </div>
            </section>
        </>
    );
}

export default SativaLifePage;
