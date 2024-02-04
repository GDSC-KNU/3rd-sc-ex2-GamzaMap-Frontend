const BussinessNumber = ({ label, register, errors }) => {
	const error = { ...errors };
	return (
		<div className="mt-1 flex flex-col">
			<label htmlFor="shopName" className="text-xs">
				{label}
			</label>
			<input
				{...register(label, {
					required: '필수 입력 항목입니다.',
				})}
				id="shopName"
				className="h-8 rounded border mt-2 border-black"
			/>
			{error[label] && (
				<span className="text-xs text-red-500">{error[label].message}</span>
			)}
		</div>
	);
};

export default BussinessNumber;
