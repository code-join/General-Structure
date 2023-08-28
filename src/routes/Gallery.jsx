// CSS
import './Gallery.css';

// React Router
import { Link } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

// Fotos
import { gallery } from '../assets/data/gallery.js';

const Gallery = () => {
	return (
		<div id="container-gallery">
			<div id="gallery">
				<Carousel controls={true} slide={false} interval={null}>
					{gallery.map((foto) => (
						<Carousel.Item key={foto.id}>
							<img src={foto.src} alt={foto.alt} />
						</Carousel.Item>
					))}
				</Carousel>
			</div>
			<div id="div-voltar">
				<Link to="/General-Structure/" id="link-voltar">
					<p>Voltar</p>
				</Link>
			</div>
		</div>
	);
};

export default Gallery;
