import {
    ButtonContainer,
    ButtonItem,
    ButtonText,
    ButtonWrapper,
    KakaoButtonItem,
    KakaoLogo,
    LoginButtonContainer,
} from '../../../styles/LoginStyle';

import KakaoImg from '../../../assets/KakaoLogo.svg';

const Buttons = () => {
    return (
        <>
            <ButtonContainer>
                <LoginButtonContainer>
                    <ButtonWrapper>
                        <ButtonItem>
                            <ButtonText type="login">Login</ButtonText>
                        </ButtonItem>
                        <KakaoButtonItem>
                            <KakaoLogo>
                                <img src={KakaoImg} alt="KakaoLogo" />
                            </KakaoLogo>
                            <ButtonText type="login">
                                Login with Kakao
                            </ButtonText>
                        </KakaoButtonItem>
                    </ButtonWrapper>
                </LoginButtonContainer>
            </ButtonContainer>
        </>
    );
};

export default Buttons;
