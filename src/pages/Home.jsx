import HomeTemplate from '../components/template/HomeTemplate';
import Sidebar from '../components/organisms/layout/Sidebar';
const HomePage = () => {
	return (
		<>
			<HomeTemplate />
			<div className="flex">
				<Sidebar />
				<div>page will show here!</div>
			</div>
		</>
	);
};

export default HomePage;
