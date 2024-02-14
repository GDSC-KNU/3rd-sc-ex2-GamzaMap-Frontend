import { Link } from 'react-router-dom';

import PickImg from '../../../assets/Sidebar/Pick-Icon.svg';
import MapImg from '../../../assets/Sidebar/Map-Icon.svg';
import ChattingImg from '../../../assets/Sidebar/Chatting-Icon.svg';

import {
	ChattingContainer,
	MapContainer,
	PickContainer,
	TextContainer,
} from '../../../styles/SidebarStyle';

const Buttons = () => {
	return (
		<>
			<PickContainer>
				<Link to="/pick">
					<img src={PickImg} alt="PickIcon" />
				</Link>
				<TextContainer>Pick List</TextContainer>
			</PickContainer>
			<MapContainer>
				<Link to="/map">
					<img src={MapImg} alt="MapIcon" />
				</Link>
				<TextContainer>Map</TextContainer>
			</MapContainer>
			<ChattingContainer>
				<Link to="/chatting">
					<img src={ChattingImg} alt="ChattingIcon" />
				</Link>
				<TextContainer>Chatting</TextContainer>
			</ChattingContainer>
		</>
	);
};

export default Buttons;
