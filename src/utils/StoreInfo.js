import Goni from '../assets/Pick/Goni-Table.png';
import SoJeong from '../assets/Pick/Baek-So-Jeong.png';
import WCollection from '../assets/Pick/W-Collection.png';
import Myeon from '../assets/Pick/Myeon-Tamjeong.png';
import Concrete from '../assets/Pick/Cafe-Concrete.png';
import CafeKeanu from '../assets/Pick/Cafe-Keanu.png';

import GoniDetail from '../assets/Detail/Goni-Table-Detail.png';
import SoJeongDetail from '../assets/Detail/Baek-So-Jeong-Detail.png';
import WCollectionDetail from '../assets/Detail/W-Collection-Detail.png';
import MyeonDetail from '../assets/Detail/Myeon-Tamjeong-Detail.png';
import ConcreteDetail from '../assets/Detail/Cafe-Concrete-Detail.png';
import CafeKeanuDetail from '../assets/Detail/Cafe-Keanu-Detail.png';

export const StoreInfo = [
    {
        title: 'Goni Table',
        number: '053-939-5585',
        address01: 'Daegu Buk-gu',
        address02: 'Sangyeok-ro 6-gil, 29',
        image: Goni,
        Detail: GoniDetail,
        star: 4.51,
        review: '1,463',
        hour01: 'Monday ~ Sunday 11:00 ~ 21:30',
        hour02: 'Break Time 15:30 ~ 17:00',
        type: 'Restaurant',
        position: { lat: 35.8926, lng: 128.6085 },
    },
    {
        title: 'Baek So-jeong',
        number: '053-939-8862',
        address01: 'Daegu Buk-gu',
        address02: 'Daehak-ro, 89-1',
        image: SoJeong,
        Detail: SoJeongDetail,
        star: 3.84,
        review: '3,182',
        hour01: 'Monday ~ Sunday 11:00 ~ 20:00',
        hour02: 'Break Time 15:00 ~ 17:00',
        type: 'Restaurant',
        position: { lat: 35.893, lng: 128.6099 },
    },
    {
        title: 'Myeon-Tamjeong',
        number: '053-215-8386',
        address01: 'Daegu Buk-gu',
        address02: 'Sangyeok-ro 8-gil, 36',
        image: Myeon,
        Detail: MyeonDetail,
        star: 4.61,
        review: '606',
        hour01: 'Monday ~ Sunday 11:00 ~ 21:00',
        hour02: 'Regular holiday - Sunday',
        type: 'Restaurant',
        // link: Myeon,
        position: { lat: 35.893555, lng: 128.609149 },
    },
    {
        title: 'W Collection',
        number: '053-944-2380',
        address01: 'Daegu Buk-gu',
        address02: 'Gyeongdae-ro, 31',
        image: WCollection,
        Detail: WCollectionDetail,
        star: 4.34,
        review: '122',
        hour01: 'Monday ~ Sunday 09:00 ~ 23:00',
        type: 'Cafe',
        // link: WCollection,
        position: { lat: 35.884466, lng: 128.613471 },
    },
    {
        title: 'Cafe Concrete',
        number: '0507-0284-4658',
        address01: 'Daegu Buk-gu',
        address02: 'Daehyeon-ro 13-gil, 29',
        image: Concrete,
        Detail: ConcreteDetail,
        star: 4.58,
        review: '207',
        hour01: 'Monday ~ Sunday 10:00 ~ 03:00',
        type: 'Cafe',
        // link: Concrete,
        position: { lat: 35.8864, lng: 128.6071 },
    },
    {
        title: 'Keanu',
        number: '010-4909-7674',
        address01: 'Daegu Buk-gu',
        address02: 'Daehyeon-ro 19-gil, 38',
        image: CafeKeanu,
        Detail: CafeKeanuDetail,
        star: 4.64,
        review: '159',
        hour01: 'Monday ~ Friday 08:30 ~ 24:00',
        hour02: 'Saturday ~ Sunday 09:00 ~ 24:00',
        type: 'Cafe',
        // link: CafeKeanu,
        position: { lat: 35.8859, lng: 128.6101 },
    },
];
