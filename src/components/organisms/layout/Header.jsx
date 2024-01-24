import { IoIosSearch } from 'react-icons/io';

import HeaderButtons from '../../common/Button/HeaderButtons';
import LogoButton from '../../common/Button/LogoButton';
import ProfileButton from '../../common/Button/ProfileButton';
import SearchInput from '../../common/Input/SearchInput';

const Header = () => {
	return (
		<header className="w-full h-20 bg-beg-1">
			<div className="flex gap-2 h-full justify-center items-center">
				<LogoButton logoName="GamzaMap" />
				<form className="basis-1/2">
					<div className="relative">
						<div className="absolute inset-y-0 end-3 flex items-center cursor-pointer">
							<IoIosSearch className="text-3xl" />
						</div>
						<SearchInput />
					</div>
				</form>
				<div id="locationSection" className="basis-2/3 flex gap-6 mx-4">
					<HeaderButtons icon="cafe" text="카페" />
					<HeaderButtons icon="restaurant" text="식당" />
					<HeaderButtons icon="gas" text="주유소" />
				</div>
				<div id="profileSection" className="basis-40">
					<ProfileButton />
				</div>
			</div>
		</header>
	);
};

export default Header;
