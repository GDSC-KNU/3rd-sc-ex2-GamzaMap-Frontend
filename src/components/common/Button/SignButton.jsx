const SignButton = ({ state }) => {
	return (
		<button
			type="submit"
			className="w-[474px] h-[58px] mx-auto rounded-[10px] text-[30px] flex justify-center items-center bg-slate-50 mt-[46px]"
		>
			{state}
		</button>
	);
};

export default SignButton;
