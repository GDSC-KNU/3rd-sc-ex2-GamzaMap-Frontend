import { useNavigate } from 'react-router-dom';
const InteractionButton = ({ mt, detail, isForm }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		if (detail === '로그아웃') {
			console.log(detail);
			navigate('/');
			//로그아웃 코드
		} else if (detail === '저장하기') {
			console.log(detail);
			navigate('/mypage');
			//저장하기 코드
		}
	};

	return (
		<button
			id="logout"
			className={`h-10 w-full mx-auto ${mt} bg-beg-1 rounded-lg flex justify-center items-center text-xs cursor-pointer hover:bg-beg-2`}
			{...(isForm ? { type: 'submit' } : { onClick: handleClick })} //버튼이 form으로 사용될 경우 그렇지 않을 경우를 나누어서 사용
		>
			{detail}
		</button>
	);
};

export default InteractionButton;
