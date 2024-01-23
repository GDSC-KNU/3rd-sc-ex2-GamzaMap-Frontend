const AuthInput = ({ state }) => {
	return (
		<div className="mx-auto w-[474px] mt-[23px]">
			<label htmlFor={state} className="text-[18px]">
				{state.toUpperCase()}
			</label>
			<input
				type={state}
				placeholder=""
				className="block w-[474px] h-[58px] bg-white border border-black rounded-[10px] text-[30px]"
			/>
		</div>
	);
};

export default AuthInput;
