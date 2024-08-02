import React from 'react';

function Bolo(props) {
	return (
		<div className="col-md-3 col-6 todosindredientes avela cenoura nutella">
			<div className="bolo-box center">
				<span>#{props.bolo.numero}</span>
				<a href= {props.bolo.href} target="_blank" rel="noreferrer">
					<img loading="lazy" width="235" height="235"
						src= {props.bolo.src}
						className="attachment-full size-full wp-post-image" alt="" decoding="async"
						srcSet= {props.bolo.srcSet}
						sizes="(max-width: 235px) 100vw, 235px" />
				</a>
				<h2>
					<a href= {props.bolo.href} target="_blank" rel="noreferrer">
						{props.bolo.nome}
					</a>
				</h2>
				<a href= {props.bolo.href}
					className="btn-bolos" target="_blank" rel="noreferrer">
					Eu quero
				</a>
			</div>
			<br />
			<br />
		</div>
	);
};

export default Bolo;