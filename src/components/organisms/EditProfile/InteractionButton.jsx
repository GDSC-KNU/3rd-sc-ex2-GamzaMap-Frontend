const InteractionButton = ({ mt, detail }) => {
	return (
		<div
			id="logout"
			className={`h-10 mx-auto ${mt} bg-beg-1 rounded-lg flex justify-center items-center text-xs cursor-pointer hover:bg-beg-2`}
		>
			{detail}
		</div>
	);
};

export default InteractionButton;
