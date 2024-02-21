import axios from 'axios';

import { BASE_URL } from '../utils/URL';
import { loginActions } from './login-slice';

export const loginResult = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                `${BASE_URL}/user/login`,
                { email, password },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    },
                },
            );

            dispatch(loginActions.setEmail(response.email));
            dispatch(loginActions.setPassword(response.password));
        } catch (error) {
            alert('로그인에 실패했습니다.');
            throw new Error(error);
        }
    };
};
