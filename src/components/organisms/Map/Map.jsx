import { useCallback, useEffect, useRef } from 'react';
import { MapContainer } from '../../../styles/MapStyle';
import { markers, styles } from './MapOption';
// import { MAP_API_KEY } from '../../../utils/URL';

function Map() {
    const mapRef = useRef(null);

    const initMap = useCallback(() => {
        const newMap = new window.google.maps.Map(mapRef.current, {
            center: { lat: 35.8905697, lng: 128.610855264775 },
            zoom: 16,
            maxZoom: 20,
            minZoom: 14,
            styles: styles,
        });

        // const image = {
        //     url: image1,
        //     //마커 크기 조절 가능
        //     size: new window.google.maps.Size(20, 32),
        //     // The origin for this image is (0, 0).
        //     origin: new window.google.maps.Point(0, 0),
        //     // The anchowindow.r for this image is the base of the flagpole at (0, 32).window.
        //     anchor: new window.google.maps.Point(0, 32),
        // };

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
                content: [marker.title, marker.number].join('<br>'),
            });

            infoWindows[(marker.title, marker.number)] = infoWindow;

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

        //db에서 받아온 가게들 마커로 표시
        markers.forEach((marker) => {
            const newMarker = new window.google.maps.Marker({
                map: newMap,
                position: marker.position,
                title: marker.title,
                number: marker.number,
                optimized: false,
                animation: window.google.maps.Animation.DROP,
                // icon: image, //이미지 세팅 후 마커 가능
                // 	// icon: image1, //이미지 단일 마커 가능
            });
            madeMarkers.push(newMarker);
            createInfoWindow(newMarker, newMap, madeMarkers);
        });
    }, [mapRef]);

    useEffect(() => {
        initMap();
    }, [initMap]);

    // fetch(
    //     `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=${MAP_API_KEY}`,
    // )
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    //     .catch((error) => console.log(error));

    return (
        <>
            <MapContainer className="map" ref={mapRef}></MapContainer>
        </>
    );
}

export default Map;
