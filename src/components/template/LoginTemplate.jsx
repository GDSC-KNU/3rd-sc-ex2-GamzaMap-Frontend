import { Link } from 'react-router-dom';
import LoginForm from '../common/Form/LoginForm';
const LoginTemplate = () => {
	return (
		<>
			<div
				id="loginArea"
				className="w-[582px] h-[605px] bg-slate-300 mx-auto mt-[89px] rounded-[20px]"
			>
				<div className="text-[60px] text-center p-[30px]">GamzaMap</div>
				<LoginForm />
				<div className="text-[20px] text-center mt-[40px]">
					<span>아직 회원이 아니신가요? </span>
					<Link to="/auth/register" className="font-bold">
						회원가입
					</Link>
				</div>
			</div>
		</>
	);
};

export default LoginTemplate;
