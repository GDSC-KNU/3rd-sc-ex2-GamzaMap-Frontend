import ProfileBox from '../organisms/EditProfile/ProfileBox';
import image1 from '../../assets/image1.svg';
import image2 from '../../assets/image2.svg';
import image3 from '../../assets/image3.svg';
import image4 from '../../assets/image4.svg';
import SaveButton from '../common/Button/SaveButton';
import { useState } from 'react';

const images = [image1, image2, image3, image4];

const EditProfileTemplate = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const HandleImageClick = (index) => {
		setSelectedImage(index);
	};

	return (
		<ProfileBox>
			<div className="text-center text-base font-bold">
				원하는 프로필을 선택해주세요
			</div>
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
			<SaveButton />
		</ProfileBox>
	);
};

export default EditProfileTemplate;

<section className="bg-beg-1"></section>;
