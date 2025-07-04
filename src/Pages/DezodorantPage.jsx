import React from "react";
import { Helmet } from 'react-helmet-async';

function DezodorantPage() {
    return (
        <div className="product-container">
            <Helmet>
                <title>Aloe Ever-Shield Dezodorant | Forever Living | Holistyczne Usługi Zdrowia</title>
                <meta name="keywords" content="aloe ever-shield, dezodorant forever, dezodorant aloesowy, dezodorant bez aluminium, dezodorant naturalny, dezodorant w sztyfcie, kremowy dezodorant, pewność siebie, ochrona przed wilgocią, ochrona przed zapachem, dezodorant bez soli aluminium, dezodorant dla alergików, dezodorant po depilacji, dezodorant po goleniu, pielęgnacja skóry, odżywianie skóry, łagodny dezodorant, dezodorant nie plami ubrań, całodzienna ochrona, świeżość, aloe vera dezodorant, naturalny dezodorant w sztyfcie, forever living dezodorant, aloes dezodorant, hipoalergiczny dezodorant, dezodorant bez podrażnień, dezodorant dla wrażliwej skóry, antyperspirant naturalny, dezodorant ekologiczny, bio dezodorant, dezodorant aloes sklep, dezodorant forever cena, najlepszy naturalny dezodorant, dezodorant bez chemii, dezodorant bez parabenów, dezodorant kojący, dezodorant pielęgnujący" />
                <meta name="description" content="Aloe Ever-Shield - kremowy dezodorant w sztyfcie bez soli aluminium. Zapewnia długotrwałą ochronę przed wilgocią i zapachem. Bezpieczny dla wrażliwej skóry, można stosować po depilacji i goleniu." />
            </Helmet>
            <img 
                src="/images/dezodorant.jpg" 
                alt="Dezodorant Aloe Ever-Shield" 
                className="product-image"
                style={{ width: "500px", height: "auto" }} 
            />
            <h2>Pewność siebie na co dzień</h2>
            <p>Codziennie stajesz w obliczu sytuacji, w których Twoje ciało mówi za Ciebie. Pewność siebie i poczucie komfortu to najwięksi sprzymierzeńcy Twoich działań i celów. Czasem zależy od nich wszystko!</p>
            
            <p>Z myślą o maksymalnej pewności siebie, a jednocześnie o optymalnym zabezpieczeniu delikatnej skóry przed podrażnieniami i reakcjami alergicznymi, opracowaliśmy <strong>ALOE EVER-SHIELD</strong>. Zaawansowana formuła tego kremowego dezodorantu w sztyfcie zapewnia długotrwałą ochronę przed wilgocią i niechcianym zapachem.</p>
            
            <h3>Bezpieczeństwo i pielęgnacja</h3>
            <p>Podobnie jak wszystkie produkty Forever, Aloe Ever-Shield wytwarzany jest z czystego aloesowego żelu aloe vera. Nie zawiera soli aluminium ani innych drażniących składników, które mogą wywoływać przykre reakcje skóry. Dlatego może Cię tak doskonale <strong>CHRONIĆ</strong>, a jednocześnie <strong>PIELĘGNOWAĆ</strong> i <strong>ODŻYWIAĆ</strong> Twoją skórę w najbardziej delikatnych miejscach.</p>
            
            <h3>Łagodność i skuteczność</h3>
            <p>Dzięki kojącej mocy naturalnych składników nasz kremowy dezodorant może być używany bezpośrednio po kąpieli i depilacji, bez obaw o podrażnienia. Do tego łatwo się rozprowadza i nie plami ubrań. Zaufaj Aloe Ever-Shield w codziennej pielęgnacji ciała i bądź pewny całodziennej ochrony i świeżości.</p>
            
            <h3>Dlaczego warto wybrać Aloe Ever-Shield?</h3>
            <ul>
                <li>Nie zawiera soli aluminium</li>
                <li>Łagodny dla skóry – idealny po depilacji</li>
                <li>Nie zostawia białych śladów na ubraniach</li>
                <li>Skuteczna ochrona przez cały dzień</li>
                <li>Bardzo wydajny</li>
            </ul>

            <h3>Sprawdź produkt</h3>
            <p><a href="https://thealoeveraco.shop/sfnSdLIS" target="_blank" rel="noopener noreferrer" className="product-link">Kliknij tutaj, aby zobaczyć produkt</a></p>

        </div>
    );
}

export default DezodorantPage;
