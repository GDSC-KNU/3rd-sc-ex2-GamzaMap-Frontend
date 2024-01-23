const LogoButton = ({ logoName }) => {
	return (
		<>
			<div
				id="brandLogo"
				className="basis-72 p-4 h-full text-4xl cursor-pointer"
			>
				{logoName}
			</div>
		</>
	);
};

export default LogoButton;
