import LogoutButton from '../../common/Button/LogoutButton';
import QuestionOwner from './QuestionOwner';
import ProfileDetail from './ProfileDetail';
const EditProfile_index = () => {
	return (
		<div
			id="infoBox"
			className="max-w-[350px] mx-auto h-96 rounded-[20px] bg-slate-200 p-6 relative"
		>
			<ProfileDetail />
			<LogoutButton />
			<QuestionOwner />
		</div>
	);
};

export default EditProfile_index;
