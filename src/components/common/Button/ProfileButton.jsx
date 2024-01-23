import profileImg from '../../../assets/profile.svg';

const ProfileButton = () => {
	return (
		<>
			<img
				className="w-16 h-16 rounded-full border border-black border- cursor-pointer mx-auto"
				src={profileImg}
			/>
		</>
	);
};

export default ProfileButton;
