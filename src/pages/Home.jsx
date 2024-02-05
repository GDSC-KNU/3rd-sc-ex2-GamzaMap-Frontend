import HomeTemplate from '../components/template/HomeTemplate';
import { Wrapper } from '@googlemaps/react-wrapper';

const HomePage = () => {
	return (
		<>
			<Wrapper
				apiKey={import.meta.env.VITE_GOOGLEMAP_API}
				libraries={['places']}
			>
				<HomeTemplate />
			</Wrapper>
		</>
	);
};

export default HomePage;
