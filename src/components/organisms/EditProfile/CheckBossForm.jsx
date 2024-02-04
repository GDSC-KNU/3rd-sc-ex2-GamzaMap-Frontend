import InteractionButton from './InteractionButton';
import CheckBossInput from './CheckBossInput';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const CheckBossForm = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		navigate('/mypage');
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<CheckBossInput label="상호명" register={register} errors={errors} />
			<CheckBossInput label="위치" register={register} errors={errors} />
			<CheckBossInput label="사업자번호" register={register} errors={errors} />
			<label className="flex mt-16">
				<input type="checkbox" required />
				<span className="text-xs ml-1">약관 동의</span>
			</label>
			<InteractionButton mt="mt-3" detail="등록하기" isForm={true} />
		</form>
	);
};

export default CheckBossForm;
