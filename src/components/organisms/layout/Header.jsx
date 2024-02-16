import { IoIosSearch } from 'react-icons/io';

import HeaderButtons from '../../common/Button/HeaderButtons';
import LogoButton from '../../common/Button/LogoButton';
import SearchInput from '../../common/Input/SearchInput';
import LoginButton from '../../common/Button/LoginButton';
import {
	HeaderButtonContainer,
	HeaderContainer,
	InputContainer,
	LeftContainer,
} from '../../../styles/HeaderStyle';

const Header = () => {
	return (
		<HeaderContainer id="HeaderContainer">
			<LeftContainer>
				<LogoButton id="LogoButton" logoName="GamzaMap" />
				<InputContainer>
					<SearchInput />
					<IoIosSearch className="text-2xl text-stone-500" />
				</InputContainer>

				<HeaderButtonContainer id="locationSection">
					<HeaderButtons icon="cafe" text="Cafe" />
					<HeaderButtons icon="restaurant" text="Restaurant" />
					<HeaderButtons icon="cvs" text="CVS" />
				</HeaderButtonContainer>
			</LeftContainer>
			<LoginButton />
		</HeaderContainer>
	);
};

export default Header;
