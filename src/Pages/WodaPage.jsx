import React from "react";
import { Helmet } from 'react-helmet-async';


function WodaPage() {
    return (
        <div className="product-container">
            <Helmet>
                <title>Żywa Woda - Aqua Sativa | Woda Alkaliczna | Holistyczne Usługi Zdrowia</title>
                <meta name="keywords" content="żywa woda, aqua sativa, aqua sativa life, woda alkaliczna, woda wodorowa, woda pierwotna, woda naturalna, jonizator wody, życiodajny eliksir, 70% wody w organizmie, klastry cząsteczek wody, nawodnienie organizmu, optymalne nawodnienie, oczyszczanie organizmu, detoksykacja, dostarczanie tlenu, dostarczanie minerałów, walka z wolnymi rodnikami, poprawa odporności, równowaga kwasowo-zasadowa, ph 8.8, neutralizacja pepsyny, refluks żołądkowy, buforowanie kwasów, jonizator aqua sativa life, orły medycyny 2024, businesswoman awards, najlepsze urządzenie do jonizacji, usuwanie osadów, usuwanie rdzy, usuwanie zanieczyszczeń, poprawa smaku wody, poprawa zapachu wody, usuwanie wirusów bakterii, woda alkaliczna właściwości, woda drobnocząsteczkowa, wchłanianie wody, zakwaszenie organizmu, żywa woda sosnowiec, woda alkaliczna śląsk, jonizator wody cena, aqua sativa sklep, najlepsza woda alkaliczna, zdrowa woda pitna, filtracja wody" />
                <meta name="description" content="Aqua Sativa Life - jonizator do produkcji żywej wody alkalicznej. Wyróżnienie Orły Medycyny 2024. Oczyszcza, alkalizuje, nawadnia organizm. Skuteczna w walce z zakwaszeniem i refluksem." />
            </Helmet>
            
            <img 
                src="/images/zywawoda.jpg" 
                alt="Aqua Sativa" 
                className="product-image"
                style={{ width: "500px", height: "auto" }} 
            />
            <h1>ŻYWA WODA - AQUA SATIVA</h1><br/>
            <h2>WODA - <strong>życiodajny eliksir</strong></h2>
            <p>Nie jest tajemnicą, że już od wielu lat mówi się, że "Jesteś tym, co pijesz" albo że
                 "Twoje zdrowie zależy od ilości i jakości wody", ponieważ nasze ciało składa się w około <strong>70%</strong> z wody.</p>
            
            <h3>Jaka woda jest najlepsza?</h3>
            <p>To woda pierwotna, czysta, naturalna, alkaliczna i wodorowa. Woda ta jest nieskażona,
                 czysta i lecznicza dla naszego <strong>organizmu</strong>.</p>
            
            <h3>Jak działa <strong>woda alkaliczna</strong>?</h3>
            <p>Woda wodociągowa zawiera duże klastry cząsteczek, które trudno przenikają do komórek,
                 co powoduje, że organizm nie jest odpowiednio nawodniony. Natomiast woda, która przemieszcza się w naturze przez skały i minerały, ma mniejsze klastry, które trafiają bezpośrednio do komórek, zapewniając optymalne nawodnienie.</p>
            
            <h3>Korzyści z picia wody alkalicznej</h3>
            <ul>
                <li>Oczyszcza organizm</li>
                <li>Zapewnia lepsze nawodnienie</li>
                <li>Dostarcza tlen i minerały</li>
                <li>Pomaga w detoksykacji</li>
                <li>Wspomaga walkę z wolnymi rodnikami</li>
                <li>Poprawia odporność</li>
                <li>Reguluje równowagę kwasowo-zasadową</li>
            </ul>
            
            <h3><strong>Badania naukowe</strong></h3>
            <p>Badania wykazały, że woda alkaliczna o pH 8.8 może neutralizować pepsynę odpowiedzialną za refluks i ma zdolność buforowania kwasów.</p>
            
            <h3>Nasze urządzenie do jonizacji wody</h3>
            <p><strong>Jonizator Aqua Sativa Life</strong> otrzymał wyróżnienie jako <strong>najlepsze</strong> urządzenie
             do produkcji żywej wody w konkursie Businesswoman Awards magazynu "Businesswoman & Life".</p>
            
            <h3>Właściwości Aqua Sativa Life</h3>
            <ul>
                <li>Czysta i miękka – usuwa osady, rdzę i zanieczyszczenia</li>
                <li>Smaczna – poprawia smak i zapach wody</li>
                <li>Bez bakterii – usuwa wirusy i bakterie</li>
                <li>Alkaliczna – wspomaga walkę z zakwaszeniem organizmu</li>
                <li>Drobnocząsteczkowa – lepiej wchłaniana przez organizm</li>
            </ul>
            
            <p><strong>Podaruj swojemu organizmowi to, co najlepsze – zasłużył na to!</strong></p>

            <h3>Sprawdź produkt</h3>
            <p><a href="https://www.sativalife.eu/app/register/PL0063736" target="_blank" rel="noopener noreferrer" className="product-link">Kliknij tutaj, aby przejść na stronę Sativa Life</a></p>
        </div>
    );
}

export default WodaPage;

