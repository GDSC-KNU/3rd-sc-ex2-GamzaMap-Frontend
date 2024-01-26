import myPageProfile from '../../assets/myPageProfile.svg';

const InfoTemplate = () => {
	return (
		<section className="bg-beg-1">
			<div className="max-w-[350px] mx-auto h-96 rounded-[20px] bg-slate-200 p-6">
				<div className="flex gap-4">
					<img
						src={myPageProfile}
						className="w-36 h-36 object-cover bg-white"
					/>
					<div>
						<div id="nickName" className="">
							<div className="bg-beg-1 rounded-lg w-14 text-xs p-2 text-center">
								닉네임
							</div>
							<div className="mt-1">춘식이</div>
						</div>
						<div id="id" className="mt-2">
							<div className="bg-beg-1 rounded-lg w-14 text-xs p-2 text-center">
								아이디
							</div>
							<div className="mt-1">chunsik@gmail.com</div>
						</div>
					</div>
				</div>
				<div>로그아웃 버튼</div>
			</div>
		</section>
	);
};

export default InfoTemplate;

{
	/* <div className="bg-beg-1 rounded-lg w-24 text-xs p-2 text-center">
							프로필 변경
						</div> */
}
