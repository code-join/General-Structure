// CSS
import './Contato.css';

// PropTypes
import PropTypes from 'prop-types';

const Contato = ({ abrirModal }) => {
	return (
		<div className="contato">
			<p id="element-p" onClick={abrirModal}>
				Contato
			</p>
		</div>
	);
};

Contato.propTypes = {
	abrirModal: PropTypes.func,
};

export default Contato;
