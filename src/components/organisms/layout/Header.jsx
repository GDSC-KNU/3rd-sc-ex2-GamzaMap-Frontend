import { PiCoffeeLight } from 'react-icons/pi';
import { GrCafeteria } from 'react-icons/gr';
import { PiGasCan } from 'react-icons/pi';
import { IoIosSearch } from 'react-icons/io';

const Header = () => {
	return (
		<header className="w-full h-20 bg-orange-100">
			<container className="flex gap-2 h-full justify-center items-center">
				<div
					id="brandLogo"
					className="basis-72 p-4 h-full text-4xl cursor-pointer"
				>
					GamzaMap
				</div>
				<form className="basis-1/2">
					<div class="relative">
						<div class="absolute inset-y-0 end-3 flex items-center cursor-pointer">
							<IoIosSearch className=" text-3xl" />
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
					<button className=" w-36 h-12 bg-white rounded-3xl border border-zinc-600 flex justify-center items-center gap-2">
						<PiCoffeeLight className="text-3xl" />
						<span className="text-2xl">카페</span>
					</button>
					<button className=" w-36 h-12 bg-white rounded-3xl border border-zinc-600 flex justify-center items-center gap-2">
						<GrCafeteria className="text-3xl" />
						<span className="text-2xl">식당</span>
					</button>
					<button className=" w-36 h-12 bg-white rounded-3xl border border-zinc-600 flex justify-center items-center gap-2">
						<PiGasCan className="text-3xl" />
						<span className="text-2xl">주유소</span>
					</button>
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
