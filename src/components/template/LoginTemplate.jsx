const LoginTemplate = () => {
	return (
		<>
			<div
				id="loginArea"
				className="w-[582px] h-[605px] p-[50px] bg-slate-300 mx-auto mt-[89px] rounded-[20px]"
			>
				<div className="text-[60px] text-center p-[30px]">GamzaMap</div>
				<form action="" className="mx-auto">
					<div id="idInput" className="">
						<label for="id">ID</label>
						<input
							type="text"
							placeholder=""
							className="block w-[474px] h-[58px] rounded-[10px] text-[30px]"
						/>
					</div>
					<div id="passwordInput" className="mt-[23px]">
						<label for="password">PASSWORD</label>
						<input
							type="password"
							placeholder=""
							className="block w-[474px] h-[58px] rounded-[10px] text-[30px]"
						/>
					</div>
					<button
						type="submit"
						className="w-[474px] h-[58px] rounded-[10px] text-[30px] flex justify-center items-center bg-slate-50 mt-[46px]"
					>
						Sign In
					</button>
				</form>
				<div className="text-[20px] text-center mt-[30px]">
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
