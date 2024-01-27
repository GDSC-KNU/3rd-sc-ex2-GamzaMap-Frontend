import ProfileBox from '../organisms/EditProfile/ProfileBox';
import SaveButton from '../common/Button/SaveButton';
import SelectedImages from '../organisms/EditProfile/SelectedImages';

const EditProfileTemplate = () => {
	return (
		<ProfileBox>
			<div className="text-center text-base font-bold">
				원하는 프로필을 선택해주세요
			</div>
			<SelectedImages />
			<SaveButton />
		</ProfileBox>
	);
};

export default EditProfileTemplate;

<section className="bg-beg-1"></section>;
