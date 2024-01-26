import { Link } from 'react-router-dom';

const QuestionOwner = () => {
	return (
		<div id="ownerQuestion" className=" justify-center mt-36 flex gap-1">
			<div>사장님이신가요?</div>
			<Link to="/bossCheck" className="font-bold">
				인증 받기
			</Link>
		</div>
	);
};

export default QuestionOwner;
