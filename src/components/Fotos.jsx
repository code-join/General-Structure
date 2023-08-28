// CSS 
import './Fotos.css';

// React Router
import { Link } from 'react-router-dom';

const Fotos = () => {
	return (
		<div className="fotos">
			<Link to="/General-Structure/fotos" id="link-fotos">
				<p>Fotos</p>
			</Link>
		</div>
	);
};

export default Fotos;
