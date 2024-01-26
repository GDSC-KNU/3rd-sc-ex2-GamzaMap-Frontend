import ProfileBox from '../organisms/EditProfile/ProfileBox';
import image1 from '../../assets/image1.svg';
import image2 from '../../assets/image2.svg';
import image3 from '../../assets/image3.svg';
import image4 from '../../assets/image4.svg';
import SaveButton from '../common/Button/SaveButton';
const EditProfileTemplate = () => {
	return (
		<ProfileBox>
			<div className="text-center text-base font-bold">
				원하는 프로필을 선택해주세요
			</div>
			<div className="flex flex-wrap gap-3 justify-center mt-6">
				<img
					src={image1}
					alt=""
					className="w-24 h-24 object-cover rounded-md border border-neutral-200"
				/>
				<img
					src={image2}
					alt=""
					className="w-24 h-24 object-cover rounded-md border border-neutral-200"
				/>
				<img
					src={image3}
					alt=""
					className="w-24 h-24 object-cover rounded-md border border-neutral-200"
				/>
				<img
					src={image4}
					alt=""
					className="w-24 h-24 object-cover rounded-md border border-neutral-200"
				/>
			</div>
			<SaveButton />
		</ProfileBox>
	);
};

export default EditProfileTemplate;

<section className="bg-beg-1"></section>;
