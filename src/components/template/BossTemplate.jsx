import ProfileBox from '../organisms/EditProfile/ProfileBox';

const BossTemplate = () => {
	return (
		<ProfileBox>
			<div className="mt-1">
				<label htmlFor="shopName" className="text-xs">
					상호명
				</label>
				<input
					id="shopName"
					className="w-72 h-8 rounded border mt-2 border-black"
				/>
			</div>
			<div className="mt-1">
				<label htmlFor="location" className="text-xs">
					위치
				</label>
				<input
					id="location"
					className="w-72 h-8 rounded border mt-2 border-black"
				/>
			</div>
			<div className="mt-1">
				<label htmlFor="bussinessNumber" className="text-xs">
					사업자번호
				</label>
				<input
					id="bussinessNumber"
					className="w-72 h-8 rounded border mt-2 border-black"
				/>
			</div>
		</ProfileBox>
	);
};

export default BossTemplate;
