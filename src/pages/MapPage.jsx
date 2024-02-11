import MapTemplate from '../components/template/MapTemplate';
import { Wrapper } from '@googlemaps/react-wrapper';

const MapPage = () => {
	return (
		<Wrapper apiKey={import.meta.env.VITE_GOOGLEMAP_API} libraries={['places']}>
			<MapTemplate />
		</Wrapper>
	);
};

export default MapPage;
