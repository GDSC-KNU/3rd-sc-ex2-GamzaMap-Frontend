import myPageProfile from '../../assets/myPageProfile.svg';
import imageEdit from '../../assets/imageEdit.svg';
import { Link } from 'react-router-dom';
const InfoTemplate = () => {
	return (
		<section className="bg-beg-1">
			<div
				id="infoBox"
				className="max-w-[350px] mx-auto h-96 rounded-[20px] bg-slate-200 p-6 relative"
			>
				<div id="img&info" className="flex gap-4">
					<div className="relative bg-slate-400">
						<img src={myPageProfile} className="w-28 h-28 object-cover"></img>
						<img src={imageEdit} className="absolute right-1 bottom-1" />
					</div>
					<div className="">
						<div id="nickName" className="">
							<div className="bg-beg-1 rounded-md w-12 text-[10px] p-1 text-center">
								닉네임
							</div>
							<div className="mt-1">춘식이</div>
						</div>
						<div id="id" className="mt-2">
							<div className="bg-beg-1 rounded-md w-12 text-[10px] p-1 text-center">
								아이디
							</div>
							<div className="mt-1">chunsik@gmail.com</div>
						</div>
					</div>
				</div>
				<div
					id="logout"
					className=" w-76 h-10 mx-auto mt-5 bg-beg-1 rounded-lg flex justify-center items-center text-xs"
				>
					로그아웃
				</div>
				<div id="ownerQuestion" className=" justify-center mt-36 flex gap-1">
					<div>사장님이신가요?</div>
					<Link to="/bossCheck" className="font-bold">
						인증 받기
					</Link>
				</div>
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
