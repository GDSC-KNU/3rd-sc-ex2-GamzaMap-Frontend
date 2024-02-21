import { ContentContainer, PcContent } from '../../styles/ContentStyle';
import {
    ButtonContainer,
    ButtonItem,
    ButtonText,
    ButtonWrapper,
    InputContainer,
    InputFormContainer,
    InputItem,
    InputLabel,
    RegisterContainer,
    TextContainer,
    TextWrapper,
    TitleText,
    TextItem01,
    TextItem02,
} from '../../styles/RegisterStyle';
import Header from '../organisms/layout/Header';
import Sidebar from '../organisms/layout/Sidebar';

const RegisterTemplate = () => {
    return (
        <>
            <Header />
            <PcContent>
                <Sidebar />
                <ContentContainer>
                    <RegisterContainer>
                        <InputContainer>
                            <TitleText>Welcome !</TitleText>
                            <InputFormContainer>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <InputItem type="email" id="email" />
                            </InputFormContainer>
                            <InputFormContainer>
                                <InputLabel htmlFor="Password">
                                    Password
                                </InputLabel>
                                <InputItem type="Password" id="Password" />
                            </InputFormContainer>
                        </InputContainer>
                        <ButtonContainer>
                            <ButtonWrapper>
                                <ButtonItem>
                                    <ButtonText type="submit">
                                        Submit
                                    </ButtonText>
                                </ButtonItem>
                            </ButtonWrapper>
                            <TextContainer>
                                <TextWrapper>
                                    <TextItem01>Already signed up?</TextItem01>
                                    <TextItem02 href="/auth/login">
                                        Login
                                    </TextItem02>
                                </TextWrapper>
                            </TextContainer>
                        </ButtonContainer>
                    </RegisterContainer>
                </ContentContainer>
            </PcContent>
        </>
    );
};

export default RegisterTemplate;
