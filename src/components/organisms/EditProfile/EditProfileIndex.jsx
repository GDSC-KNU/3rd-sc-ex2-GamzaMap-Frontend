import LogoutButton from '../../common/Button/LogoutButton';
import QuestionOwner from './QuestionOwner';
import ProfileDetail from './ProfileDetail';
import ProfileBox from './ProfileBox';
const EditProfileIndex = () => {
	return (
		<ProfileBox>
			<ProfileDetail />
			<LogoutButton />
			<QuestionOwner />
		</ProfileBox>
	);
};

export default EditProfileIndex;
