import filledStar from '../../../assets/filledStar.svg';
import emptyStar from '../../../assets/emptyStar.svg';
import mapIcon from '../../../assets/mapIcon.svg';

const Shop = ({ imageUrl, shopname, rating, reviewCount, address }) => {
	const filledStarCount = Math.floor(rating);
	const emptyStarCount = 5 - filledStarCount;
	const formattedRating = rating.toFixed(1);
	return (
		<div
			id="itemBox"
			className="w-64 p-4 border-2 border-neutral-400  rounded-2xl"
		>
			<img
				src={imageUrl}
				className=" w-full h-36 rounded-md object-cover"
			></img>
			<div className=" text-xl mt-2">{shopname}</div>
			<div className="flex mt-2 text-sm gap-2 items-center">
				<div className="flex items-center">{formattedRating}</div>
				<div className="flex items-center">
					{[...Array(filledStarCount)].map((_, index) => (
						<img key={index} src={filledStar} className="h-4" />
					))}
					{[...Array(emptyStarCount)].map((_, index) => (
						<img key={index} src={emptyStar} className="h-4" />
					))}
				</div>
				<div className="flex items-center">({reviewCount})</div>
			</div>
			<div className="flex mt-2 gap-2 items-center">
				<img src={mapIcon} className="h-5" />
				<div className="text-xs">{address}</div>
			</div>
			<div className="mt-8 h-9 bg-beg-2 rounded-lg flex items-center justify-center text-sm hover:cursor-pointer hover:bg-beg-1">
				채팅방 입장하기
			</div>
		</div>
	);
};

export default Shop;
