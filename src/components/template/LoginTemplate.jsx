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
					아직 회원이 아니신가요?{' '}
					<a href="" className="font-bold">
						회원가입
					</a>
				</div>
			</div>
		</>
	);
};

export default LoginTemplate;
