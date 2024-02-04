import InteractionButton from './InteractionButton';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ShopNameInput from './ShopNameInput';
import ShowLocation from './ShowLocation';
import BussinessNumber from './BussinessNumber';
import { Wrapper } from '@googlemaps/react-wrapper';
import { useState } from 'react';

const CheckBossForm = () => {
	const navigate = useNavigate();
	const [location, setLocation] = useState({ lat: 37.5665, lng: 126.978 }); //초기 값

	//상호명을 입력하면 해당 좌표를 받아서 location에 저장
	const handleGetLocation = (location) => {
		setLocation(location.geometry.location.toJSON());
	};
	//react-form-hook 관련 로직
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
		<Wrapper apiKey={import.meta.env.VITE_GOOGLEMAP_API} libraries={['places']}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<ShopNameInput
					label="상호명"
					register={register}
					errors={errors}
					handleGetLocation={handleGetLocation}
				/>
				<ShowLocation label="위치" location={location} />
				<BussinessNumber
					label="사업자번호"
					register={register}
					errors={errors}
				/>
				<label className="flex mt-16">
					<input type="checkbox" required />
					<span className="text-xs ml-1">약관 동의</span>
				</label>
				<InteractionButton mt="mt-3" detail="등록하기" isForm={true} />
			</form>
		</Wrapper>
	);
};

export default CheckBossForm;
