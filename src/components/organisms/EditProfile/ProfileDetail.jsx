import myPageProfile from '../../../assets/myPageProfile.svg';
import imageEdit from '../../../assets/imageEdit.svg';
const ProfileDetail = () => {
	return (
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
	);
};

export default ProfileDetail;
