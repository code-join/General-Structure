// CSS
import './JanelaModal.css';

// PropTypes
import PropTypes from 'prop-types';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Icon
import { FaWhatsapp } from 'react-icons/fa';

const JanelaModal = ({ show, fechaModal }) => {
	const sendMessageWpp = (e) => {
		const apiWpp = 'https://api.whatsapp.com/send?phone=';
		const phoneNumber = e.target.textContent.replace(/\D/g, '');
		window.open(`${apiWpp}${phoneNumber}`);
	};

	return (
		<div className="janela-modal">
			<Modal
				show={show}
				onHide={fechaModal}
				centered={true}
				size="sm"
				animation={true}
				fullscreen="sm"
			>
				<Modal.Header closeButton>
					<Modal.Title>
						Contatos:
						<p>Clique no número desejado</p>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="wpp">
						<a href="#" id="wpp1" onClick={sendMessageWpp}>
							<FaWhatsapp className="fa-wpp"/> (xx) xxxxx-xxxx
						</a>
						<a href="#" id="wpp2" onClick={sendMessageWpp}>
							<FaWhatsapp className="fa-wpp"/> (xx) xxxxx-xxxx
						</a>
					</div>
				</Modal.Body>
				{/* <Modal.Footer>
					<Button variant="secondary" onClick={fechaModal}>
						Botão de fechar
					</Button>
					<Button variant="primary" onClick={fechaModal}>
						Botão de salvar
					</Button>
				</Modal.Footer> */}
			</Modal>
		</div>
	);
};

JanelaModal.propTypes = {
	fechaModal: PropTypes.func,
	show: PropTypes.bool,
};

export default JanelaModal;
