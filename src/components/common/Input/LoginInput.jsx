import {
    InputFormContainer,
    InputItem,
    InputLabel,
} from '../../../styles/LoginStyle';

import { loginActions } from '../../../store/login-slice';
import { useDispatch } from 'react-redux';

const LoginInput = () => {
    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        dispatch(loginActions.setEmail(e.target.value));
    };

    const handlePasswordChange = (e) => {
        dispatch(loginActions.setPassword(e.target.value));
    };

    return (
        <>
            <InputFormContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputItem
                    type="email"
                    id="email"
                    onChange={handleEmailChange}
                />
            </InputFormContainer>
            <InputFormContainer>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputItem
                    type="password"
                    id="password"
                    onChange={handlePasswordChange}
                />
            </InputFormContainer>
        </>
    );
};

export default LoginInput;
