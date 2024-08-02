function Botao(props) {
  return (

    <a href={props.link}target="_blank" rel="noreferrer">
        <i className={props.ico} aria-hidden="true"></i>
    </a>

  );
}

export default Botao;
