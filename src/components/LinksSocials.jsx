// CSS
import './LinksSocials.css';

// Data
import { socials } from '../assets/data/socials.js';

// Icons
import { FaYoutube, FaSpotify, FaInstagram, FaFacebook } from 'react-icons/fa';


const components = {
	Youtube: <FaYoutube />,
	Spotify: <FaSpotify />,
	Instagram: <FaInstagram />,
	Facebook: <FaFacebook />,
};

const icons = (icon) => {
	if (icon in components) {
		return components[icon];
	}
};

function LinksSocials() {
	return (
		<div className="links-socials">
			{socials.map((social) => (
				<a href={social.href} key={social.id} target="_blank" rel="noreferrer">
					{icons(social.icon)}
				</a>
			))}
		</div>
	);
}

export default LinksSocials;
