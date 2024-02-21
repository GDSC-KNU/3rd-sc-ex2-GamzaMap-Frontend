import QuestionOwner from './QuestionOwner';
import ProfileDetail from './ProfileDetail';
import ProfileBox from './ProfileBox';
import InteractionButton from './InteractionButton';
import { useNavigate } from 'react-router-dom';
const EditProfileIndex = () => {
	const navigate = useNavigate();
	//로그아웃 로직 구현
	const handleClick = () => {
		console.log('로그아웃');
		navigate('/');
	};

	return (
		<ProfileBox>
			<ProfileDetail />
			<InteractionButton
				mt="mt-5"
				detail="로그아웃"
				isForm={false}
				handleClick={handleClick}
			/>
			<QuestionOwner />
		</ProfileBox>
	);
};

export default EditProfileIndex;
