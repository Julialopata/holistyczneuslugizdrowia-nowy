import React from "react";
import { Helmet } from 'react-helmet-async';

function KonopiePage() {
    return (
        <div className="product-container">
            <Helmet>
                <title>Olej CBD - Konopie | Doradca Konopny | Holistyczne Usługi Zdrowia</title>
                <meta name="keywords" content="olej cbd, cbd oil, konopie siewne, cannabis sativa, doradca konopny, terapia konopna, cbd 10%, olej konopny, kannabidiol, thc, cbda, cbc, cbdv, cbg, cbga, cbn, terpeny, mircen, limonen, pinen, kariofilen, flawonoidy, kemferol, apigenina, kwercytyna, omega 3 6 9, witamina e b1 b2 k, fosfor potas magnez wapń żelazo, ekstrakcja co2, pełne spektrum, full spectrum, raw cbd, konopie właściwości, cbd przeciwbólowe, cbd przeciwlękowe, cbd przeciwdepresyjne, cbd przeciwdrgawkowe, cbd antyoksydacyjne, cbd regulacja sebum, cbd bezsenność, cbd problemy żołądkowe, cbd łuszczyca, cbd padaczka, cbd rwa kulszowa, cbd tarczyca, cbd stres, cbd lęk, cbd depresja, formy kwasowe cbd, metoda ekstrakcji, produkty certyfikowane cbd, konsultacja cbd, doradztwo konopne, cbd sosnowiec, olej cbd sklep, olej cbd cena, olej cbd dawkowanie, najlepszy olej cbd, naturalny olej cbd, konopie medyczne, konopie lecznicze" />
                <meta name="description" content="Profesjonalne doradztwo konopne w ujęciu CBD. Naturalny olejek CBD 10% Full Spectrum wyprodukowany metodą ekstrakcji CO2. Pomoc w doborze odpowiedniego produktu i dawki. Darmowa konsultacja." />
            </Helmet>
            
            <img 
                src="/images/konopie.jpg" 
                alt="Olej CBD" 
                className="product-image"
                style={{ width: "500px", height: "auto" }}
            />
            <h2>Olej CBD</h2>
            <h3>Konopie - bać się czy nie?</h3>
            <p>Konopie są godnym szacunku produktem, ale w ostatnim stuleciu zostały zdyskredytowane.
            Mają bardzo dużo do zaoferowania trwającej obecnie rewolucji zdrowotnej. Jest sporo sprzecznych informacji
            i nieporozumień, przez co łatwo się pogubić, jaki <strong>olej CBD</strong> wybrać.</p>
            
            <p>Zapraszam Cię do kontaktu w celu dobrania odpowiedniego produktu dla Ciebie. Jestem doradcą konopnym w ujęciu <strong>CBD</strong>,
                 chętnie pomogę i poprowadzę Cię w terapii konopnej.</p>
            
            <h3>Co to jest CBD?</h3>
            <p>CBD to jedna z substancji zawartych w Cannabis Sativa, posiadająca wiele korzyści zdrowotnych. W przeciwieństwie do
                 THC nie powoduje uczucia odurzenia. CBD jest narzędziem medycyny prewencyjnej dzięki swoim właściwościom 
                <strong> przeciwzapalnym</strong> i <strong>antystresowym</strong>.</p>
            
            <h3>Na co zwrócić uwagę przy zakupie CBD?</h3>
            <ul>
                <li>Formy kwasowe – obecne w nieprzetworzonej roślinie.</li>
                <li>Metoda ekstrakcji – ekstrakcja <strong>CO2</strong> zapewnia czystość i skuteczność.</li>
                <li>Pełne spektrum – zawiera dodatkowe związki roślinne wspierające działanie CBD.</li>
            </ul>
            
            <h3>Właściwości CBD</h3>
            <ul>
                <li>Przeciwbólowe</li>
                <li>Przeciwlękowe i przeciwdepresyjne</li>
                <li>Przeciwdrgawkowe</li>
                <li>Antyoksydacyjne</li>
                <li>Regulujące produkcję sebum</li>
            </ul>
            
            <h3>CBD może pomóc przy:</h3>
            <ul>
                <li>Bezsenności</li>
                <li>Problemach żołądkowo-jelitowych</li>
                <li>Łuszczycy</li>
                <li>Padaczce</li>
                <li>Rwie kulszowej</li>
                <li>Problemach z tarczycą</li>
                <li>Stresie, lęku i depresji</li>
            </ul>
            
            <h3>Olejek CBD 10% RAW, Full Spectrum</h3>
            <p>Naturalny olejek z konopi siewnych wyprodukowany metodą ekstrakcji <strong>CO2</strong>, zawiera pełne spektrum substancji
                 charakterystycznych dla <strong>Cannabis Sativa</strong>.</p>
            
            <h3>Skład</h3>
            <ul>
                <li>Kannabinoidy: CBD, CBDa, THC, THCa, CBC, CBDV, CBG, CBGa, CBN</li>
                <li>Terpeny: mircen, limonen, pinen, kariofilen</li>
                <li>Flawonoidy: kemferol, apigenina, kwercytyna</li>
                <li>Pierwiastki śladowe: fosfor, potas, magnez, wapń, żelazo</li>
                <li>Witaminy: E, B1, B2, K</li>
                <li>Kwasy tłuszczowe omega 3-6-9</li>
            </ul>
            
            <p>Ważne: Kupuj produkty certyfikowane, wolne od metali ciężkich i zanieczyszczeń. Zapraszam do kontaktu na darmową konsultację przed zakupem.</p>

            <h3>Sprawdź produkt</h3>
            <p><a href="https://www.sativalife.eu/app/register/PL0063736" target="_blank" rel="noopener noreferrer" className="product-link">Kliknij tutaj, aby przejść na stronę Sativa Life</a></p>
        </div>
    );
}

export default KonopiePage;
