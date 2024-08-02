import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Carrosel from './componentes/Carrosel';
import Sabores from './componentes/Sabores';
import Vitrine from './componentes/Vitrine';
import Pedidos from './componentes/Pedidos';
import Sobre from './componentes/Sobre';



function App() {
  return (
    <>
    <Cabecalho></Cabecalho>
    <Carrosel></Carrosel>
    {/* <Sabores></Sabores> */}
    <Vitrine></Vitrine>
    <Pedidos></Pedidos>
    <Sobre></Sobre> 
  

    </>
  );
}

export default App;
