import { IoIosSearch } from 'react-icons/io';
import HeaderButtons from '../../common/Button/HeaderButtons';
import LogoButton from '../../common/Button/LogoButton';

const Header = () => {
	return (
		<header className="w-full h-20 bg-orange-100">
			<container className="flex gap-2 h-full justify-center items-center">
				<LogoButton logoName="GamzaMap" />
				<form className="basis-1/2">
					<div class="relative">
						<div class="absolute inset-y-0 end-3 flex items-center cursor-pointer">
							<IoIosSearch className="text-3xl" />
						</div>
						<input
							type="search"
							id="searchBar"
							class="block w-full p-4 pe-10 text-lg text-gray-900 border border-zinc-600 rounded-xl"
							placeholder="장소를 검색해주세요"
							required
						/>
					</div>
				</form>
				<div id="locationSection" className=" basis-2/3 flex gap-6 mx-4">
					<HeaderButtons icon="cafe" text="카페" />
					<HeaderButtons icon="restaurant" text="식당" />
					<HeaderButtons icon="gas" text="주유소" />
				</div>
				<div id="profileSection" className=" basis-40">
					<img
						className="w-16 h-16 rounded-full border border-black border- cursor-pointer mx-auto"
						src="profile.svg"
					/>
				</div>
			</container>
		</header>
	);
};

export default Header;
