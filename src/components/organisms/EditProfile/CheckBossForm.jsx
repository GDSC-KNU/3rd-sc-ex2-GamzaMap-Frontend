import InteractionButton from './InteractionButton';
import CheckBossInput from './CheckBossInput';
const CheckBossForm = () => {
	return (
		<form>
			<CheckBossInput label="상호명" />
			<CheckBossInput label="위치" />
			<CheckBossInput label="사업자번호" />
			<label className="flex mt-16">
				<input type="checkbox" />
				<span className="text-xs ml-1">약관 동의</span>
			</label>
			<InteractionButton mt="mt-3" detail="등록하기" />
		</form>
	);
};

export default CheckBossForm;
