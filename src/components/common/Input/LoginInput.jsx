import {
    InputFormContainer,
    InputItem,
    InputLabel,
} from '../../../styles/LoginStyle';

const LoginInput = () => {
    return (
        <>
            <InputFormContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputItem type="email" id="email" />
            </InputFormContainer>
            <InputFormContainer>
                <InputLabel htmlFor="Password">Password</InputLabel>
                <InputItem type="Password" id="Password" />
            </InputFormContainer>
        </>
    );
};

export default LoginInput;
