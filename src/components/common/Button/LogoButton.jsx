import { Link } from 'react-router-dom';
import { TextContainer } from '../../../styles/HeaderStyle';

const LogoButton = ({ logoName }) => {
	return (
		<>
			<TextContainer id="GamzaLogo">
				<Link to="/">{logoName}</Link>
			</TextContainer>
		</>
	);
};

export default LogoButton;
