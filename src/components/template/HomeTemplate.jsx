import Header from '../organisms/layout/Header';
import { useState, useEffect, useRef } from 'react';
import image1 from '../../assets/image1.svg';
import { info } from 'autoprefixer';

// db에서 받을 값 임시로 설정
const markers = [
	{
		position: { lat: 35.8919171, lng: 128.6077906 },
		title: '나린찜닭',
	},
	{
		position: { lat: 35.89, lng: 128.604 },
		title: '햄버거집',
	},
	{
		position: { lat: 35.893, lng: 128.615 },
		title: '고깃집',
	},
	{
		position: { lat: 35.885, lng: 128.615 },
		title: '피자집',
	},
];

const HomeTemplate = () => {
	const [map, setMap] = useState(null);
	const ref = useRef();
	//지도 스타일 정확한건 나도 몰라서 하나씩 바꿔보면서 찾아야함
	const styles = [
		{
			featureType: 'road',
			elementType: 'labels',
			stylers: [{ visibility: 'on' }],
		},
		{
			featureType: 'poi',
			elementType: 'labels',
			stylers: [{ visibility: 'off' }],
		},
		{
			featureType: 'transit',
			elementType: 'labels',
			stylers: [{ visibility: 'on' }],
		},
		{
			featureType: 'landscape',
			elementType: 'labels',
			stylers: [{ visibility: 'on' }],
		},
		{
			featureType: 'administrative',
			elementType: 'labels',
			stylers: [{ visibility: 'on' }],
		},
		{
			featureType: 'water',
			elementType: 'labels',
			stylers: [{ visibility: 'on' }],
		},
	];

	const infoWindows = {};
	const madeMarkers = [];
	function createInfoWindow(marker, newMap, madeMarkers) {
		//마커 클릭시 튕기는 애니메이션
		function toggleBounce() {
			if (marker.getAnimation() !== null) {
				marker.setAnimation(null);
			} else {
				marker.setAnimation(window.google.maps.Animation.BOUNCE);
			}
		}
		const infoWindow = new window.google.maps.InfoWindow({
			content: marker.title,
		});

		infoWindows[marker.title] = infoWindow;

		marker.addListener('click', () => {
			//다른 info창 다 닫기, 열어두고 싶으면 close 함수 밖으로 옮기면 됨
			for (const infoWindow of Object.values(infoWindows)) {
				infoWindow.close();
				marker.setAnimation(null);
			}
			//다른 마커 애니메이션 다 끄기
			for (const marker of madeMarkers) {
				marker.setAnimation(null);
			}
			toggleBounce();

			// 여기에 해당 가게 정보 띄우는 코드 작성하면 될듯?

			infoWindow.open({ anchor: marker, map: newMap });
		});
	}

	useEffect(() => {
		//지도 생성 및 경북대를 중심으로 설정
		const newMap = new window.google.maps.Map(ref.current, {
			center: { lat: 35.8905697, lng: 128.610855264775 }, //경북대학교 좌표
			zoom: 16, //적당한 줌 정도
			maxZoom: 16,
			minZoom: 16,
			styles: styles,
			disableDefaultUI: true, //확대버튼,지도타입 변경 버튼 없애기
			gestureHandling: 'none', // 지도 이동 금지
			zoomControl: false, //확대 축소 금지
		});

		const image = {
			url: image1,
			//마커 크기 조절 가능
			size: new window.google.maps.Size(20, 32),
			// The origin for this image is (0, 0).
			origin: new window.google.maps.Point(0, 0),
			// The anchowindow.r for this image is the base of the flagpole at (0, 32).window.
			anchor: new window.google.maps.Point(0, 32),
		};

		//db에서 받아온 가게들 마커로 표시
		markers.forEach((marker) => {
			const newMarker = new window.google.maps.Marker({
				position: marker.position,
				map: newMap,
				title: marker.title,
				optimized: false,
				animation: window.google.maps.Animation.DROP,
				// 	// icon: image, //이미지 세팅 후 마커 가능
				// 	// icon: image1, //이미지 단일 마커 가능
				// 	// label: '나린찜닭', //마커에 라벨 가능
			});
			madeMarkers.push(newMarker);
			createInfoWindow(newMarker, newMap, madeMarkers);
		});

		setMap(newMap);
	}, []);
	return (
		<div>
			<Header />
			<div ref={ref} id="map" className="h-[90dvh]" />
		</div>
	);
};

export default HomeTemplate;
