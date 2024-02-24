import { StoreInfo } from '../../../utils/StoreInfo';

export const markers = StoreInfo.map((store) => ({
    title: store.title,
    number: store.number,
    position: store.position,
}));

export const styles = [
    // {
    //     featureType: 'road',
    //     elementType: 'labels',
    //     stylers: [{ visibility: 'on' }],
    // },
    // {
    //     featureType: 'poi',
    //     elementType: 'labels',
    //     stylers: [{ visibility: 'off' }],
    // },
    // {
    //     featureType: 'transit',
    //     elementType: 'labels',
    //     stylers: [{ visibility: 'on' }],
    // },
    // {
    //     featureType: 'landscape',
    //     elementType: 'labels',
    //     stylers: [{ visibility: 'on' }],
    // },
    // {
    //     featureType: 'administrative',
    //     elementType: 'labels',
    //     stylers: [{ visibility: 'on' }],
    // },
    // {
    //     featureType: 'water',
    //     elementType: 'labels',
    //     stylers: [{ visibility: 'off' }],
    // },
];
