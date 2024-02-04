import { useNavigate } from 'react-router-dom';

const InteractionButton = ({ mt, detail }) => {
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
		} else if (detail === '등록하기') {
			console.log(detail);
			navigate('/mypage');
			//등록하기 코드
		}
	};

	return (
		<div
			id="logout"
			className={`h-10 mx-auto ${mt} bg-beg-1 rounded-lg flex justify-center items-center text-xs cursor-pointer hover:bg-beg-2`}
			onClick={handleClick}
		>
			{detail}
		</div>
	);
};

export default InteractionButton;
