import image1 from '../../../assets/image1.svg';
import image2 from '../../../assets/image2.svg';
import image3 from '../../../assets/image3.svg';
import image4 from '../../../assets/image4.svg';
const images = [image1, image2, image3, image4];
const SelectedImages = ({ selectedImageId, handleImageClick }) => {
	return (
		<div className="flex flex-wrap gap-3 justify-center mt-6">
			{images.map((image, index) => (
				<div
					key={index}
					className="w-24 h-24"
					onClick={() => handleImageClick(index)} //id가 없어서 index로 사용중
				>
					<img
						src={image}
						alt=""
						className={`${selectedImageId == index ? 'brightness-75' : ''} object-cover cursor-pointer hover:scale-110 transition-transform ease-in-out duration-500`}
					/>
				</div>
			))}
		</div>
	);
};

export default SelectedImages;
