import SignButton from '../Button/SignButton';
import AuthInput from '../Input/AuthInput';
import { useState } from 'react';
const LoginForm = () => {
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');

	const handleInputId = (e) => {
		setId(e.target.value);
	};
	const handleInputPassword = (e) => {
		setPassword(e.target.value);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		//로그인 로직...
		return;
	};

	return (
		<form>
			<AuthInput state="id" value={id} fn={handleInputId} />
			<AuthInput state="password" value={password} fn={handleInputPassword} />
			<SignButton state="Sign In" fn={handleLogin} />
		</form>
	);
};

export default LoginForm;
