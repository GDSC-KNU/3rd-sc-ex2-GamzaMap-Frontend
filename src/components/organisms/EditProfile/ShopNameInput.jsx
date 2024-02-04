import { useRef } from 'react';
import { useEffect } from 'react';
const ShopNameInput = ({ label, handleGetLocation }) => {
	const inputRef = useRef();
	useEffect(() => {
		const autoComplete = new window.google.maps.places.Autocomplete(
			inputRef.current,
			{
				// 대한민국의 장소만 검색되도록 설정
				componentRestrictions: { country: 'kr' },
				fields: ['address_components', 'geometry', 'name', 'place_id'],
				// 지도 표시 영역 외 장소도 검색되도록 함
				strictBounds: false,
				// 장소 타입은 설정하지 않음으로써 모든 장소유형이 검색되도록 함
				types: [],
			},
		);
		autoComplete.addListener('place_changed', () => {
			const place = autoComplete.getPlace();
			if (!place.geometry || !place.geometry.location) {
				alert('유효하지 않은 주소입니다.');
			}
			if (place.geometry.viewport || place.geometry.location) {
				handleGetLocation(place);
				console.log(place);
			}
		});
	}, [handleGetLocation]);

	return (
		<div className="mt-1 flex flex-col">
			<label htmlFor="shopName" className="text-xs">
				{label}
			</label>
			<input
				ref={inputRef}
				id="shopName"
				className="h-8 rounded border mt-2 border-black"
				required
			/>
		</div>
	);
};

export default ShopNameInput;
