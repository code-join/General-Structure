// CSS
import './Music.css';

// ReactAudio
import ReactAudioPlayer from 'react-audio-player';

// Audio
import audio from '../assets/audio/audio.mp3';

const Music = () => {
	return (
		<div className="music">
			<ReactAudioPlayer id="player" src={audio} controls />
		</div>
	);
};

export default Music;
