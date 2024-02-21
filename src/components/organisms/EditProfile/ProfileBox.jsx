const ProfileBox = ({ children }) => {
	return (
		<div
			id="infoBox"
			className="max-w-[350px] mx-auto min-h-96 rounded-[20px] bg-white p-8 relative border border-neutral-500 "
		>
			{children}
		</div>
	);
};

export default ProfileBox;
