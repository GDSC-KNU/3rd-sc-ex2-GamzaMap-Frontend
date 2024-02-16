import { useState } from 'react';

import LoginBtn from '../../../assets/Header/LoginButton.svg';
import UserImg from '../../../assets/Header/UserProfileImg.svg';
import {
	ProfileButtonStyle,
	ProfileContainer,
} from '../../../styles/HeaderStyle';

const LoginButton = () => {
	const [imgSrc, setImgSrc] = useState(LoginBtn);
	const [isClicked, setIsClicked] = useState(false);

	const onClickHandler = () => {
		if (isClicked) {
			setImgSrc(UserImg);
			setIsClicked(false);
		} else {
			setImgSrc(LoginBtn);
			setIsClicked(true);
		}
	};
	return (
		<>
			<ProfileContainer id="ProfileContainer">
				<ProfileButtonStyle>
					<img onClick={onClickHandler} src={imgSrc} />
				</ProfileButtonStyle>
				{/* <ProfileButton /> */}
			</ProfileContainer>
		</>
	);
};

export default LoginButton;
