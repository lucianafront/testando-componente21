function Sabores() {
    return (
      <div className="container" style={{marginTop: "35px", textAlign: "center"}}>
      <div className="row">
        <div className="col-md-12">
          <h2>Selecione a categoria</h2>
          <div className="listaCategoria mt-3">
            <button className="btn btn-bolo-chocolate" onclick="showBoloChocolate();">Bolos de Chocolate</button>
            <button className="btn btn-bolo-branco" onclick="showBoloBranco();">Bolos Brancos</button>
            <button className="btn btn-bolo-zero" onclick="showBoloZero();">Bolos Zero Açúcar</button>
            <button className="btn btn-bolo-caseiro" onclick="showBoloCaseiros();">Bolos Caseiros</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default Sabores;