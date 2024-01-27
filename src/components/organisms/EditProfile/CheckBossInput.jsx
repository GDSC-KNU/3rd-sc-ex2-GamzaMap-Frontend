const CheckBossInput = ({ label }) => {
	return (
		<div className="mt-1 flex flex-col">
			<label htmlFor="shopName" className="text-xs">
				{label}
			</label>
			<input id="shopName" className="h-8 rounded border mt-2 border-black" />
		</div>
	);
};

export default CheckBossInput;
