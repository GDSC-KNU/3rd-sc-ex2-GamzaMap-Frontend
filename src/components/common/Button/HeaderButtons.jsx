import cafeIcon from '../../../assets/coffee.svg';
import restaurantIcon from '../../../assets/restaurant.svg';
import gasIcon from '../../../assets/gas.svg';

const ButtonIcons = ({ icon }) => {
	if (icon === 'cafe') {
		return <img src={cafeIcon} className="w-6 h-5 mr-1" />;
	} else if (icon === 'restaurant') {
		return <img src={restaurantIcon} className="w-4 h-6 mr-1" />;
	} else if (icon === 'gas') {
		return <img src={gasIcon} className="w-5 h-7 mr-1" />;
	}
};

const HeaderButtons = ({ icon, text }) => {
	return (
		<>
			<button className="w-36 h-12 bg-white rounded-3xl border border-zinc-600 flex justify-center items-center gap-2">
				<ButtonIcons icon={icon} />
				<span className="text-2xl">{text}</span>
			</button>
		</>
	);
};

export default HeaderButtons;
