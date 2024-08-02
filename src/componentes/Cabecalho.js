import Botao from "./Botao";

function Cabecalho() {
    return (

        <div className="container">
            <div className="nav-container">
                <div className="brand">
                    <a href="https://sodiedoces.com.br/">

                        <img id="img-logo" src="https://sodiedoces.com.br/wp-content/themes/sodiedoces/img/logo-sodie.png" alt="Sodiê Doces" /></a>
                </div>
                <nav>
                    <div className="nav-mobile"><a id="nav-toggle"><span></span></a></div>
                    <ul className="nav-list">
                        <li><a href="https://sodiedoces.com.br/sobre">A Sodiê</a></li>
                        <li><a id="abrirsub" href="#!">Produtos <i className="fas fa-caret-down" aria-hidden="true"></i> </a>
                            <ul className="nav-dropdown">
                                <li><a href="https://sodiedoces.com.br/bolos">Bolos</a></li>
                                <li><a href="https://sodiedoces.com.br/salgados">Salgados</a></li>
                                <li><a href="https://sodiedoces.com.br/kit-festa/escolha-seu-kit-festa">Kit Festa</a></li>
                                <li><a href="https://sodiedoces.com.br/doces">Doces</a></li>
                                <li><a href="https://sodiedoces.com.br/tortas-doces">Tortas Doces</a></li>
                                <li><a href="https://sodiedoces.com.br/bebidas">Bebidas</a></li>
                                <li><a href="https://sodiedoces.com.br/balas-de-coco">Balas de Coco</a></li>
                            </ul>
                        </li>
                        <li><a href="https://sodiedoces.com.br/lojas">Lojas</a></li>
                        <li><a href="https://sodiedoces.com.br/contato">Contato</a></li>
                    </ul>
                </nav>
                <div className="brand2 center">

                    <div className="nav-app center btn-marrom">
                        <p>Peça no app</p>

                        <Botao
                            link='https://play.google.com/store/apps/details?id=com.sodiedoces'
                            ico='fab fa-google-play'
                        />
                        
                         <Botao
                         link='https://apps.apple.com/br/app/sodi%C3%AA-doces-oficial/id1557040152'
                         ico='fab fa-apple'

                         />
                        
                    </div>
                    <Botao
                    link='https://suafranquia.sodiedoces.com.br/oportunid'
                    ico='nav-franqueado center btn-marrom'
                    />


                    <ul className="nav-social ulflex">
                        <li>
                            <Botao
                            link='ttps://instagram.com/SodieDo'
                            ico='fab fa-instagram'
                            />
                            <Botao
                            link='https://instagram.com/SodieDoces'
                            ico='fab fa-instagram'
                            />
                            <Botao
                            link='https://instagram.com/SodieDoces'
                            ico='fab fa-instagram'
                            />

                              
                        </li>
                        <li>

                            <Botao
                             link='https://www.facebook.com/sodiedocesofici'
                             ico='ab fa-facebook-square'
                             />
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Cabecalho;
