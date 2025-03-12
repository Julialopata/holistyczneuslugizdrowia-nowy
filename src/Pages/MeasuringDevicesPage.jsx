const MeasuringDevicesPage = () => {
    return (
        <>
            <section className="info-section">
                <div className="container">

                    {/* SEKCJA 1: Sanoplasma */}
                    <div className="device-row">
                        {/* Tekst */}
                        <div className="device-text">
                            <span className="section-id">Sanoplasma</span>
                            <h3 className="device-title">Sanoplasma 3</h3>
                            <p>
                                <strong>Sanoplasma</strong> to generator plazmowy opracowany na licencji 
                                <strong> RIFETECH Ltd.</strong>, który emituje czystą falę prostokątną w 
                                zakresie <strong>1 Hz – 900 kHz</strong>. Jego precyzyjne częstotliwości pomagają 
                                w <strong>dewitalizacji mikroorganizmów patogennych</strong>.
                            </p>
                            <p>
                                Terapia falami <strong>Rife'a</strong> skutecznie usuwa bakterie, wirusy, 
                                grzyby, pleśnie i pasożyty, wspomagając <strong>detoksykację</strong> i 
                                regenerację organizmu.
                            </p>
                            <a href="/sanoplasma" className="more-link">Więcej informacji tutaj</a>
                        </div>

                        {/* Obraz */}
                        <div className="device-image">
                            <img src="/images/sanoplasmaa.jpg" alt="Sanoplasma" className="img-fluid"/>
                        </div>
                    </div>

                    {/* SEKCJA 2: Mezator M1 */}
                    <div className="device-row reverse">
                        <div className="device-image">
                            <img src="/images/mezator.jpg" alt="Mezator M1" className="img-fluid"/>
                        </div>
                        <div className="device-text">
                            <span className="section-id">Biorezonans</span>
                            <h3 className="device-title">Mezator M1</h3>
                            <p>
                                <strong>Mezator M1</strong> to urządzenie diagnostyczne wykorzystujące 
                                <strong> technologię NLS</strong>, umożliwiające analizę układu nerwowego, 
                                hormonalnego, sercowo-naczyniowego i innych.
                            </p>
                            <p>
                                Dzięki <strong>95% dokładności</strong> pozwala przewidzieć stan zdrowia nawet 
                                na <strong>5 lat</strong>. Umożliwia diagnostykę narządów, alergii i biochemii.
                            </p>
                        </div>
                    </div>

                    {/* SEKCJA 3: Quantum PRO++ */}
                    <div className="device-row">
                        <div className="device-text">
                            <span className="section-id">Biorezonans</span>
                            <h3 className="device-title">QUANTUM PRO++ Limited</h3>
                            <p>
                                <strong>Quantum PRO++</strong> analizuje organizm przy pomocy 
                                <strong> fal elektromagnetycznych</strong>, pozwalając wykryć niedobory 
                                witamin, metale ciężkie, pasożyty i inne nieprawidłowości.
                            </p>
                        </div>
                        <div className="device-image">
                            <img src="/images/Quanntum .jpg" alt="Quantum PRO++" className="img-fluid"/>
                        </div>
                    </div>

                    {/* SEKCJA 4: Zapper */}
                    <div className="device-row reverse">
                        <div className="device-image">
                            <img src="/images/content/zapper.jpg" alt="Zapper" className="img-fluid"/>
                        </div>
                        <div className="device-text">
                            <span className="section-id">Urządzenie elektryczne</span>
                            <h3 className="device-title">Zapper</h3>
                            <p>
                                <strong>Zapper</strong> emituje delikatny prąd eliminujący pasożyty, 
                                wirusy, bakterie i inne patogeny. Jest bezpieczny, bezbolesny i 
                                nieinwazyjny.
                            </p>
                        </div>
                    </div>

                    {/* SEKCJA 5: Skin Analyzer */}
                    <div className="device-row">
                        <div className="device-text">
                            <span className="section-id">Urządzenie elektryczne</span>
                            <h3 className="device-title">Skin Analyzer</h3>
                            <p>
                                <strong>Skin Analyzer</strong> precyzyjnie mierzy wilgotność i natłuszczenie skóry, 
                                pozwalając dobrać idealne terapie pielęgnacyjne.
                            </p>
                        </div>
                        <div className="device-image">
                            <img src="/images/analizator.jpg" alt="Skin Analyzer" className="img-fluid"/>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default MeasuringDevicesPage;

