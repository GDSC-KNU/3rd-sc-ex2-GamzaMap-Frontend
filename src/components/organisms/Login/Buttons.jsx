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

import { useDispatch, useSelector } from 'react-redux';
import { loginResult } from '../../../store/login-action';

const Buttons = () => {
    const dispatch = useDispatch();

    const email = useSelector((state) => state.login.email);
    const password = useSelector((state) => state.login.password);

    const handleLoginClick = async (e) => {
        e.preventDefault();

        // 아이디 값이 비어 있으면 경고 메시지 표시
        if (!email || email.trim() === '') {
            alert('Email을 입력해주세요!');
            return; // 함수 실행을 중단
        }

        await dispatch(loginResult(email, password));
        // navigate('/');
        alert('로그인 성공!');
    };

    return (
        <>
            <ButtonContainer>
                <LoginButtonContainer>
                    <ButtonWrapper>
                        <ButtonItem onClick={handleLoginClick}>
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
