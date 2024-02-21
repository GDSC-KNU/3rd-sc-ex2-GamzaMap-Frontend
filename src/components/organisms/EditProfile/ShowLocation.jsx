import { useState, useEffect, useRef } from 'react';
const ShowLocation = ({ label, location }) => {
	const [map, setMap] = useState(null);
	const ref = useRef();
	useEffect(() => {
		const newMap = new window.google.maps.Map(ref.current, {
			center: { lat: location.lat, lng: location.lng },
			zoom: 18,
		});

		setMap(newMap);
	}, [location]);
	return (
		<div className="mt-1 flex flex-col">
			<label htmlFor="shopName" className="text-xs">
				{label}
			</label>
			<div ref={ref} id="map" className=" h-40"></div>
		</div>
	);
};

export default ShowLocation;
