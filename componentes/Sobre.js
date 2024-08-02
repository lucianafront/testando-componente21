function Sobre() {
  return (

<div className="container">
    <div className="nav-container" style={{paddingTop: "20px", paddingBottom: "20px"}}>
        <div className="brand" style={{paddingTop: "20px", paddingBottom: "20px"}}>
            <a href="https://sodiedoces.com.br/"><img
                    src="https://sodiedoces.com.br/wp-content/themes/sodiedoces/img/logo-sodie-rodape.png" alt=""/></a>
        </div>
        <nav className="nav-footer">
            <ul className="nav-list">
                <li><a href="https://sodiedoces.com.br/sobre">A Sodiê</a></li>
                <li className="show-for-large"><a id="abrirsub" href="#!">Produtos <i className="fas fa-caret-up"
                            aria-hidden="true"></i> </a>
                    <ul className="nav-dropdown">
                        <li><a href="https://sodiedoces.com.br/bolos">Bolos</a></li>
                        <li><a href="https://sodiedoces.com.br/salgados">Salgados</a></li>
                        <li><a href="https://sodiedoces.com.br/kit-festa">Kit Festa</a></li>
                        <li><a href="https://sodiedoces.com.br/doces">Doces</a></li>
                        <li><a href="https://sodiedoces.com.br/balas-de-coco">Balas de Coco</a></li>
                    </ul>
                </li>
                <li className="show-for-small"><a href="https://sodiedoces.com.br/bolos">Bolos</a></li>
                <li className="show-for-small"><a href="https://sodiedoces.com.br/salgados">Salgados</a></li>
                <li className="show-for-small"><a href="https://sodiedoces.com.br/kit-festa">Kit Festa</a></li>
                <li className="show-for-small"><a href="https://sodiedoces.com.br/doces">Doces</a></li>
                <li className="show-for-small"><a href="https://sodiedoces.com.br/balas-de-coco">Balas de Coco</a></li>
                <li><a href="https://sodiedoces.com.br/lojas">Lojas</a></li>
                <li><a href="https://sodiedoces.com.br/contato">Contato</a></li>
                <li><a href="https://sodiedoces.com.br/politica-de-privacidade" target="_blank">Política de
                        Privacidade</a></li>
            </ul>
        </nav>
        <div className="brand2 center">
            <a href="https://sodiedoces.com.br/imprensa" className="nav-franqueado center btn-marrom"
                role="button">Imprensa</a>
           
            <a href="https://suafranquia.sodiedoces.com.br/oportunidade/" target="_blank"
                className="nav-franqueado center btn-marrom" role="button">Seja um franqueado</a>
            <ul className="nav-social ulflex">
                <li>
                    <a href="https://instagram.com/SodieDoces" target="_blank" rel="noopener">
                        <i className="fab fa-instagram" aria-hidden="true"></i></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/sodiedocesoficial" target="_blank" rel="noopener">
                        <i className="fab fa-facebook-square" aria-hidden="true"></i></a>
                </li>
            </ul>
        </div>
    </div>
</div>
  );
}

export default Sobre;