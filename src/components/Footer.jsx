// CSS
import './Footer.css';

const Footer = () => {
	const email = 'codejoin.dev@gmail.com';
	const subject = 'Agregador de Links';

	const sendEmail = () => {
		const url = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
		window.open(url, '_blank');
	};

	return (
		<div className="footer">
			<p>
				Criado por
				<a href="#" rel="noreferrer" onClick={sendEmail}>
					{' '}
					CodeJoin
				</a>{' '}
				&copy;2023
			</p>
		</div>
	);
};

export default Footer;
