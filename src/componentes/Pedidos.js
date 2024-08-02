import Botao from "./Botao";

function Pedidos() {
    return (
     

      <div className="container">
      <div className="row">
      
        <div className="col-md-8">
          <div className="center">
            <img src="https://sodiedoces.com.br/wp-content/themes/sodiedoces/img/app-rodape-icon.png" alt="Baixe nosso app"/>
            <h3>Um clique para adoçar seu dia! <strong>Baixe nosso app.</strong></h3>
            <Botao
            link='https://play.google.com/store/apps/details?id=com.sodiedoces'
            ico=''

            />
         
              <img src="https://sodiedoces.com.br/wp-content/themes/sodiedoces/img/google-play.png" alt="Google Play"/>

            <Botao
            link='https://apps.apple.com/br/app/sodi%C3%AA-doces-oficial/id1557040152'
            ico=''
            />
        
           
         
              
              <img src="https://sodiedoces.com.br/wp-content/themes/sodiedoces/img/app-store.png" alt="App Store"/>
          </div>
          </div>     
      
      </div>
    </div>
  

    );
  }
  
  export default Pedidos;