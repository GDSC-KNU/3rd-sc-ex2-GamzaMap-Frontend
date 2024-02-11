import ChattingIcon from '../../../assets/ChattingIcon.svg';
import MapIcon from '../../../assets/MapIcon.svg';
import PickIcon from '../../../assets/PickIcon.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const menuList = [
	{ name: 'Pick List', icon: PickIcon, path: '/pick' },
	{ name: 'Map', icon: MapIcon, path: '/map' },
	{ name: 'Chatting', icon: ChattingIcon, path: '/chatting' },
];

const Sidebar = () => {
	const [selected, setSelected] = useState();
	const navigate = useNavigate();
	const handleClick = (idx) => {
		setSelected(idx);
		navigate(menuList[idx].path);
	};
	return (
		<div className="w-[58px] h-screen p-2.5 bg-beg-1 flex-col justify-start items-center gap-5 inline-flex">
			{menuList.map((menu, idx) => (
				<div
					key={idx}
					className={`py-[9px] flex-col justify-center items-center gap-[5px] flex hover:cursor-pointer opacity-50 ${selected === idx && 'opacity-100'}`}
					onClick={() => handleClick(idx)}
				>
					<img src={menu.icon} alt="" />
					<div
						className={`text-neutral-500  text-[10px] font-normal font-['BMJUA']`}
					>
						{menu.name}
					</div>
				</div>
			))}
		</div>
	);
};

export default Sidebar;
