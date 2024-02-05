import Header from '../organisms/layout/Header';
// import { ReactComponent as kakaoLoginBtn } from '../../assets/kakaoLoginBtn.svg';

const LoginTemplate = () => {
	return (
		<>
			<Header />
			<section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
				<div className="p-6 bg-white rounded-md shadow-md">
					<h1 className="text-3xl font-semibold text-center">GamzaMap</h1>
					<form className="mt-6">
						<div className="mb-2">
							<label
								htmlFor="email"
								className="text-sm font-semibold text-gray-800"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
								// {...register('email', userEmail)}
							/>
							{/* {errors?.email && (
								<div>
									<span className="text-red-500">{errors.email.message}</span>
								</div>
							)} */}
						</div>

						<div className="mb-2">
							<label
								htmlFor="password"
								className="text-sm font-semibold text-gray-800"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
								// {...register('password', userPassword)}
							/>
							{/* {errors?.password && (
								<div>
									<span className="text-red-500">
										{errors.password.message}
									</span>
								</div>
							)} */}
						</div>

						<div className="mt-6">
							<button
								type="submit"
								className="w-full px-4 py-2 text-black duration-200 bg-beg-1 rounded-md hover:bg-beg-2"
							>
								로그인dasd
							</button>
							<img className="py-3" src={kakaoLoginBtn} />
							<kakaoLoginBtn height="10" />
						</div>

						<p className="mt-8 text-xs font-light text-center text-gray-700">
							아이디가 없다면?{' '}
							<a href="/auth/register" className="font-medium hover:underline">
								회원가입
							</a>
						</p>
					</form>
				</div>
			</section>
		</>
	);
};

export default LoginTemplate;
