# Clone :https://sodiedoces.com.br/bolos
## Foi criado componentes Botão que pode ser reutilizado em todos os elementos.

### Componente Botão
Espera 2 paremetros {link,ico}  
link ->  para uma URL
ico-> icone de fonte SVG

### Componente Cabecalho 
 1.É um componente que não espera nenhum parametro é um cabecalho de navegação do site.
 2.Props:Não recebe props diretamente,mas faz uso do componete botao que recebe algumas props especifica.->link(string):A URL para onde o botão deve redirecionar;3.-ico (string): A classe do ícone a ser exibido no botão (ex.: 'fafa-google-play').
 4.Importação-> import Botao"./Botao";
 5.Estrutura do component:-> function Cabecalho() {return ()}


### Carrosel
1.É um componente que não espera nenhum parametro,é responsavel por renderizar uma seção de destaque.
2.Props:Aceita uma props `titulo`e `descrição´,são usada para passar dados para o componentes.
Estrutura e utilização do componente:->import React from 'react';
import Carrosel from './Carrosel';

function App() {
  return (
    <div className="App">
      <Carrosel 
        titulo="BOLOS" 
        descricao="Deliciosamente recheados e com muito sabor, cada um de nossos bolos é criado para proporcionar mais amor e carinho para todas as ocasiões." 
      />
    </div>
  );
}
### Pedidos
1.É um componente que não espera nenhum parametro,é responsavel por  por exibir informações e links para baixar o aplicativo do site em quastão.

2.Props:Podemos considerar que ele aceita as seguintes props:
link: Uma propriedade que representa o URL para onde o botão deve direcionar quando clicado. Esta é uma prop obrigatória para que o botão funcione corretamente.
ico: Uma propriedade opcional que poderia representar um ícone associado ao botão, embora no exemplo fornecido não haja uso explícito dessa propriedade.

3.Estrutura e utilização do componente:->import React from 'react';
import Pedidos from './Pedidos';

function App() {
  return (
    <div className="App">
      <Pedidos />
    </div>
  );
}

export default App;

### Sabores 
1.É um componente que não espera nenhum parametro, é uma parte de um aplicativo React que permite selecionar diferentes categorias do produto através de botões.

2.Props: Props são geralmente passadas para um componente como parâmetros dentro da função que define o componente (function Sabores(props)).

3.Estrutura e utilização do componente:Function Sabores() {
  return ()}

    
### Sobre
1.É um componente que não espera nenhum parametro.O componente Sobre representa uma página ou seção específica do site.Ele utiliza outros componentes e elementos HTML para construir a estrutura visual da página

2.Props:As props que são passadas para o componente Sobre são principalmente para o componente Botao. Cada uso de Botao dentro de Sobre define diferentes URLs (link) e IDs ou classes (id) para estilização e funcionalidade dos botões ou links.

3.Estrutura e utilização do componente:function Sobre() {
    return ()}


### Vitrine
1.É um componente que não espera nenhum parametro,porém tem uma  variável chamada(bolos)simulando o retorno de uma API.O componente Vitrine é responsável por exibir uma lista de produto, cada um representado por um cartão com informações como número, nome, imagem, ingredientes e link para mais detalhes.

2.Props:Não há props explicitamente definidas neste componente Vitrine. O componente Vitrine está simplesmente renderizando uma lista de bolos, utilizando os dados fornecidos no array bolos. Cada objeto dentro desse array representa um bolo com várias propriedades como numero, href, src, nome, srcset e ingredientes.

3.Estrutura e utilização do componente:function Vitrine() {
    return ()}











