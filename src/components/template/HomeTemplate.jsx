import Header from '../organisms/layout/Header';
import { useState, useEffect, useRef } from 'react';
import image1 from '../../assets/image1.svg';
const HomeTemplate = () => {
	const [map, setMap] = useState(null);
	const ref = useRef();
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
	useEffect(() => {
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

		//db에서 좌표값 받아서 마커 생성
		const marker1 = new window.google.maps.Marker({
			position: { lat: 35.8919171, lng: 128.6077906 },
			map: newMap,
			title: '나린찜닭',
			optimized: false,
			animation: window.google.maps.Animation.DROP, //애니메이션 가능
			// icon: image, //이미지 세팅 후 마커 가능
			// icon: image1, //이미지 단일 마커 가능
			// label: '나린찜닭', //마커에 텍스트 가능
		});
		const marker2 = new window.google.maps.Marker({
			position: { lat: 35.8919132, lng: 128.603 },
			map: newMap,
			title: '나린찜닭',
			optimized: false,
			// icon: image, //이미지 세팅 후 마커 가능
			// icon: image1, //이미지 단일 마커 가능
			// label: '나린찜닭', //마커에 텍스트 가능
		});

		//마커 클릭시 튕기는 애니메이션
		function toggleBounce() {
			if (marker1.getAnimation() !== null) {
				marker1.setAnimation(null);
			} else {
				marker1.setAnimation(window.google.maps.Animation.BOUNCE);
			}
		}
		const infoWindow = new window.google.maps.InfoWindow();
		//마커 클릭 이벤트 가능
		marker1.addListener('click', () => {
			toggleBounce();
			//여기에 해당 가게 정보 띄우는 코드 작성하면 될듯?
			infoWindow.close();
			new window.google.maps.InfoWindow({
				content: '나린찜닭',
			}).open(newMap, marker1);
			// 이런 형식도 가능
			// infoWindow.setContent(marker.getTitle());
			// infoWindow.open(marker.getMap(), marker);
		});

		setMap(newMap);
	}, []);
	return (
		<div>
			<Header />
			<div ref={ref} id="map" className=" h-dvh" />
		</div>
	);
};

export default HomeTemplate;
