const Sidebar = () => {
	return (
		<div className="w-[58px] h-[787px] p-2.5 bg-orange-100 flex-col justify-start items-center gap-5 inline-flex">
			<div className="py-[9px] flex-col justify-center items-center gap-[5px] flex">
				<div className="text-neutral-500 text-[10px] font-normal font-['Jua']">
					Pick List
				</div>
			</div>
			<div className="py-[9px] flex-col justify-center items-center gap-[5px] flex">
				<div className="text-neutral-500 text-[10px] font-normal font-['Jua']">
					Map
				</div>
			</div>
			<div className="py-[9px] flex-col justify-center items-center gap-[5px] flex">
				<div className="text-neutral-500 text-[10px] font-normal font-['Jua']">
					Chatting
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
