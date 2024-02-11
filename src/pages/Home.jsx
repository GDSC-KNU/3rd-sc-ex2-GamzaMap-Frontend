import HomeTemplate from '../components/template/HomeTemplate';
import Sidebar from '../components/organisms/layout/Sidebar';
const HomePage = () => {
	return (
		<>
			<HomeTemplate />
			<div>
				<Sidebar />
				<div>home</div>
			</div>
		</>
	);
};

export default HomePage;
