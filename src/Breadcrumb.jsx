import {useLocation} from "react-router-dom";

const titles = {
    'pozostale-uslugi': 'Pozostałe usługi',
    'urzadzenia-pomiarowe': 'Urządzenia pomiarowe',
}

const kebabToTitle = (kebab) => {
    kebab = kebab.replace('/', '');

    if ('.html' === kebab.slice(-5)) {
        return '';
    }

    if (titles[kebab]) {
        return titles[kebab];
    }

    return kebab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const Breadcrumb = () => {
    const loc = useLocation();

    return (
        <div id="breadcrumb" className="division">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className=" breadcrumb-holder">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Strona główna</a></li>
                                    {loc.pathname !== '/' && <li className="breadcrumb-item"><a href={loc.pathname}>{kebabToTitle(loc.pathname)}</a></li>}
                                </ol>
                            </nav>
                            <h4 className="h4-sm steelblue-color">{kebabToTitle(loc.pathname)}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb;
