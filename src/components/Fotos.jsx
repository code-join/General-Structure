// CSS
import './Fotos.css';

// React Router
import { Link } from 'react-router-dom';

// Paths
import { routes } from '../assets/data/routes.js';

const Fotos = () => {
	return (
		<div className="fotos">
			<Link to={`${routes[1].path}`} id="link-fotos">
				<p>Fotos</p>
			</Link>
		</div>
	);
};

export default Fotos;
