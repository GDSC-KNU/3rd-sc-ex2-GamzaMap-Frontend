import image1 from '../../../assets/image1.svg';
import image2 from '../../../assets/image2.svg';
import image3 from '../../../assets/image3.svg';
import image4 from '../../../assets/image4.svg';
import { useState } from 'react';

const images = [image1, image2, image3, image4];

const SelectedImages = () => {
	const [selectedImage, setSelectedImage] = useState(null); //추후에 원래 이미지 가져올 수 있으면 초기값으로 넣으면 좋을 듯
	const HandleImageClick = (index) => {
		//이미지 클릭시 어두워지는 효과를 위한 state 변경 함수
		setSelectedImage(index);
	};

	return (
		<div className="flex flex-wrap gap-3 justify-center mt-6">
			{images.map((image, index) => (
				<div
					key={index}
					className="w-24 h-24"
					onClick={() => HandleImageClick(index)}
				>
					<img
						src={image}
						alt=""
						className={`${selectedImage == index ? 'brightness-75' : ''} object-cover cursor-pointer hover:scale-110 transition-transform ease-in-out duration-500`}
					/>
				</div>
			))}
		</div>
	);
};

export default SelectedImages;
