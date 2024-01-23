import SignButton from '../Button/SignButton';
import AuthInput from '../Input/AuthInput';
const LoginForm = () => {
	return (
		<form action="">
			<AuthInput state="id" />
			<AuthInput state="password" />
			<SignButton state="Sign In" />
		</form>
	);
};

export default LoginForm;
