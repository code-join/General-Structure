// CSS
import './Home.css';

// React
import { useState } from 'react';

// Components
import Contato from '../components/Contato';
import Footer from '../components/Footer';
import Fotos from '../components/Fotos';
import LinksJobs from '../components/LinksJobs';
import LinksSocials from '../components/LinksSocials';
import Music from '../components/Music';
import Profile from '../components/Profile';
import JanelaModal from '../components/JanelaModal';

const Home = () => {
	const [show, setShow] = useState(false);

	const fechaModal = () => setShow(false);
	const abrirModal = () => setShow(true);

	return (
		<div className="Home">
			<Profile />
			<Music />
			<Fotos />
			<LinksJobs />
			<Contato abrirModal={abrirModal} />
			<JanelaModal show={show} fechaModal={fechaModal} />
			<LinksSocials />
			<Footer />
		</div>
	);
};

export default Home;
