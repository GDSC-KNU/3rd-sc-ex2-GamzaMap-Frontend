import ProfileBox from '../organisms/EditProfile/ProfileBox';
import SelectedImages from '../organisms/EditProfile/SelectedImages';
import InteractionButton from '../organisms/EditProfile/InteractionButton';
const EditProfileTemplate = () => {
	return (
		<ProfileBox>
			<div className="text-center text-base font-bold">
				원하는 프로필을 선택해주세요
			</div>
			<SelectedImages />
			<InteractionButton mt="mt-5" detail="저장하기" />
		</ProfileBox>
	);
};

export default EditProfileTemplate;

<section className="bg-beg-1"></section>;
