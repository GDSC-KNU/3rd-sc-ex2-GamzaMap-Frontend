import QuestionOwner from './QuestionOwner';
import ProfileDetail from './ProfileDetail';
import ProfileBox from './ProfileBox';
import InteractionButton from './InteractionButton';
const EditProfileIndex = () => {
	return (
		<ProfileBox>
			<ProfileDetail />
			<InteractionButton mt="mt-5" detail="로그아웃" />
			<QuestionOwner />
		</ProfileBox>
	);
};

export default EditProfileIndex;
