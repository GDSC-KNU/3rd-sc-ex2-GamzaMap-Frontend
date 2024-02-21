import {
    TextContainer,
    TextItem01,
    TextItem02,
    TextWrapper,
} from '../../../styles/LoginStyle';

const LoginText = () => {
    return (
        <>
            <TextContainer>
                <TextWrapper>
                    <TextItem01>Not a member yet?</TextItem01>
                    <TextItem02 href="/auth/register">Join Us!</TextItem02>
                </TextWrapper>
            </TextContainer>
        </>
    );
};

export default LoginText;
