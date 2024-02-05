import ProfileBox from '../organisms/EditProfile/ProfileBox';
import SelectedImages from '../organisms/EditProfile/SelectedImages';
import InteractionButton from '../organisms/EditProfile/InteractionButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
const EditProfileTemplate = () => {
	const [selectedImageId, setSelectedImageId] = useState(null);
	const navigate = useNavigate();

	const handleClick = () => {
		//저장하기 로직 구현
		//1.db에 이미지 id 저장하기
		//2.mypage로 이동
		console.log(selectedImageId);
		navigate('/mypage');
	};
	const handleImageClick = (index) => {
		setSelectedImageId(index);
	};

	useEffect(() => {
		//db에서 이미지 id 가져오기
		setSelectedImageId(0); //id를 넣어주기 여기선 임시로 0로 설정
	}, []);

	return (
		<ProfileBox>
			<div className="text-center text-base font-bold">
				원하는 프로필을 선택해주세요
			</div>
			<SelectedImages
				selectedImageId={selectedImageId}
				handleImageClick={handleImageClick}
			/>
			<InteractionButton
				mt="mt-5"
				detail="저장하기"
				handleClick={handleClick}
			/>
		</ProfileBox>
	);
};

export default EditProfileTemplate;

<section className="bg-beg-1"></section>;
