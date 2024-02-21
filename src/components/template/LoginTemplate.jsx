import Header from '../organisms/layout/Header';
import Sidebar from '../organisms/layout/Sidebar';
import { ContentContainer, PcContent } from '../../styles/ContentStyle';
import {
    LoginContainer,
    InputContainer,
    ButtonContainer,
} from '../../styles/LoginStyle';

import Buttons from '../organisms/Login/Buttons';
import LoginInput from '../common/Input/LoginInput';
import LoginText from '../organisms/Login/LoginText';
import Title from '../organisms/Login/Title';

const LoginTemplate = () => {
    return (
        <>
            <Header />
            <PcContent>
                <Sidebar />
                <ContentContainer>
                    <LoginContainer>
                        <InputContainer>
                            <Title />
                            <LoginInput />
                        </InputContainer>
                        <ButtonContainer>
                            <Buttons />
                            <LoginText />
                        </ButtonContainer>
                    </LoginContainer>
                </ContentContainer>
            </PcContent>
        </>
    );
};

export default LoginTemplate;
