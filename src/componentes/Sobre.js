
import Botao from "./Botao";


function Sobre() {
    return (

        <div className="container">
            <div className="nav-container" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <div className="brand" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                    <Botao
                        link='ttps://sodiedoces.com.br/'
                    />

                    {/* <a href="https://sodiedoces.com.br/"><img */}
                    {/* src="https://sodiedoces.com.br/wp-content/themes/sodiedoces/img/logo-sodie-rodape.png" alt=""/></a> */}
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
                    <Botao
                        link='https://sodiedoces.com.br/imprensa'
                        id='nav-franqueado center btn-marrom'
                    />


                    <a href="https://sodiedoces.com.br/imprensa" className="nav-franqueado center btn-marrom"
                        role="button">Imprensa</a>



                    <a href="https://suafranquia.sodiedoces.com.br/oportunidade/" target="_blank"
                        className="nav-franqueado center btn-marrom" role="button">Seja um franqueado</a>
                    <ul className="nav-social ulflex">
                        <li>
                            <Botao
                                link='https://instagram.com/SodieDoces'
                                id='fab fa-instagram'
                            />


                        </li>
                        <li>
                            <Botao
                                link='https://www.facebook.com/sodiedocesoficial'
                                id='fab fa-facebook-square'
                            />

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sobre;