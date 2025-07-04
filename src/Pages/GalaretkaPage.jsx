import React from "react";
import { Helmet } from 'react-helmet-async';

function GalaretkaPage() {
    return (
        <div className="product-container">
            <Helmet>
                <title>Aloe Vera Gelly - Produkt Numer Jeden | Forever Living | Holistyczne Usługi Zdrowia</title>
                <meta name="keywords" content="aloe vera gelly, aloesowa galaretka, forever galaretka, aloes żel, stabilizowany miąższ aloe vera, produkt numer jeden, kojące działanie, łagodzenie podrażnień, drobne rany, oparzenia słoneczne, ukąszenia owadów, bezzapachowy żel, natychmiastowe ukojenie, regeneracja skóry, nawilżanie skóry, nadmierne opalanie, ochrona przed mrozem, po depilacji, po goleniu, podkład pod kosmetyki, przesuszona skóra, łuszcząca się skóra głowy, alergie skórne, nawilżenie, trądzik, podrażnione śluzówki, gojenie ran, forever aloe vera gelly, aloes w żelu, uniwersalny żel aloesowy, pierwsza pomoc aloes, aloes na oparzenia, aloes na ukąszenia, aloes na podrażnienia, aloes regenerujący, aloes nawilżający, aloes łagodzący, aloes po opalaniu, aloes zimą, aloes na skórę głowy, aloes na alergię, aloes na trądzik, aloes gojący, naturalny żel aloesowy, aloe vera gelly sklep, aloe vera gelly cena, aloe vera gelly opinie" />
                <meta name="description" content="Aloe Vera Gelly Forever - uniwersalny żel aloesowy do łagodzenia podrażnień, oparzeń, ukąszeń i ran. Stabilizowany miąższ aloe vera przynosi natychmiastowe ukojenie i przyspiesza regenerację skóry." />
            </Helmet>
           
            <img 
                src="/images/galaretka.jpg" 
                alt="Aloe Vera Gelly" 
                className="product-image"
                style={{ width: "500px", height: "auto" }} 
            />
            <h2>ALOE VERA GELLY – Produkt numer jeden</h2>
            <p>ALOE VERA GELLY to produkt numer jeden, który warto mieć zawsze pod ręką. Trudno wymieniać wszystkie miejsca, na które można ją zastosować. Popularna aloesowa galaretka zachwyci Cię swoją naturalną formułą i niezwykle kojącym działaniem.</p>
            
            <p>Główny składnik żelu to stabilizowany miąższ aloe vera, niemal identyczny z tym, jaki znajdziesz wewnątrz świeżego liścia aloesu. Całkowicie <strong>BEZPIECZNY</strong> dla skóry, nie ma sobie równych, gdy potrzebujesz skutecznego <strong>ZŁAGODZENIA</strong> podrażnień, drobnych ran, oparzeń czy ukąszeń owadów. Łagodny, bezzapachowy żel przyniesie natychmiastowe <strong>UKOJENIE</strong>, przyspieszy regenerację i nawilży skórę.</p>
            
            <h3>Wszechstronne zastosowanie</h3>
            <p>Aloe Vera Gelly złagodzi skutki nadmiernego opalania latem, zimą <strong>OCHRONI</strong> Cię przed szkodliwym wpływem niskich temperatur. Będzie doskonały dla pań po depilacji i dla panów po codziennym goleniu. Świetnie sprawdzi się także jako podkład pod inne preparaty, wspomagając ich wchłanianie.</p>
            
            <p>Stabilizowany miąższ aloe vera to również idealny sposób na przesuszoną i łuszczącą się skórę głowy. Ukoi przykre objawy uczuleń, <strong>NAWILŻY</strong> zmiany trądzikowe, zadba o podrażnione śluzówki oraz podniesie komfort gojenia się ran.</p>
            
            <h3>Zastosowania Aloe Vera Gelly</h3>
            <ul>
                <li>Ukoi gardło</li>
                <li>Na infekcje intymne</li>
                <li>Na katar</li>
                <li>Dla dzieci – na ząbkowanie</li>
                <li>Nawilży</li>
                <li>Na ukąszenia owadów</li>
                <li>Na skaleczenia i podrażnienia skóry</li>
                <li>Baza pod makijaż</li>
            </ul>
            <h3>Sprawdź produkt</h3>
            <p><a href="https://thealoeveraco.shop/k6JSeeoR" target="_blank" rel="noopener noreferrer" className="product-link">Kliknij tutaj, aby zobaczyć produkt</a></p>
        </div>
    );
}

export default GalaretkaPage;