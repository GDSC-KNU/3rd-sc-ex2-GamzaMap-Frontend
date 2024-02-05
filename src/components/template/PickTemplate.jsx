import Shop from '../organisms/Pick/Shop';
import shopImageSample from '../../assets/shopImageSample.svg';

//테스트용 임시 db 추후에 api로 받아올 예정
const DB = [
	{
		shopName: '상호명',
		rating: 4.2,
		reviewCount: 56,
		address: '대구광역시 북구 산격동 1393-13',
		imageUrl: shopImageSample,
	},
	{
		shopName: '상호명',
		rating: 3.2,
		reviewCount: 56,
		address: '대구광역시 북구 산격동 1393-13',
		imageUrl: shopImageSample,
	},
	{
		shopName: '상호명',
		rating: 4.8,
		reviewCount: 56,
		address: '대구광역시 북구 산격동 1393-13',
		imageUrl: shopImageSample,
	},
	{
		shopName: '상호명',
		rating: 2.3,
		reviewCount: 56,
		address: '대구광역시 북구 산격동 1393-13',
		imageUrl: shopImageSample,
	},
	{
		shopName: '상호명',
		rating: 4.0,
		reviewCount: 56,
		address: '대구광역시 북구 산격동 1393-13',
		imageUrl: shopImageSample,
	},
	{
		shopName: '상호명',
		rating: 4.0,
		reviewCount: 56,
		address: '대구광역시 북구 산격동 1393-13',
		imageUrl: shopImageSample,
	},
	{
		shopName: '상호명',
		rating: 4.0,
		reviewCount: 56,
		address: '대구광역시 북구 산격동 1393-13',
		imageUrl: shopImageSample,
	},
	{
		shopName: '상호명',
		rating: 4.0,
		reviewCount: 56,
		address: '대구광역시 북구 산격동 1393-13',
		imageUrl: shopImageSample,
	},
];

const PickTemplate = () => {
	return (
		<>
			<div
				id="container"
				className=" mx-auto max-w-[1080px] mt-6 flex gap-x-4 gap-y-3 flex-wrap "
			>
				{DB.map((item, index) => {
					//db 데이터를 map으로 돌려서 Shop 컴포넌트에 전달
					return (
						<Shop
							key={index}
							imageUrl={item.imageUrl}
							shopname={item.shopName}
							rating={item.rating}
							reviewCount={item.reviewCount}
							address={item.address}
						/>
					);
				})}
			</div>
		</>
	);
};

export default PickTemplate;
