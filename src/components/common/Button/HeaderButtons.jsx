import cafeIcon from '../../../assets/Header/coffee.svg';
import restaurantIcon from '../../../assets/Header/restaurant.svg';
import storeIcon from '../../../assets/Header/Store.svg';

import { HeaderButtonsStyle, ButtonText } from '../../../styles/HeaderStyle';

const ButtonIcons = ({ icon }) => {
    if (icon === 'cafe') {
        return <img src={cafeIcon} className="w-6 h-5 mr-1" />;
    } else if (icon === 'restaurant') {
        return <img src={restaurantIcon} className="w-4 h-6 mr-1" />;
    } else if (icon === 'cvs') {
        return <img src={storeIcon} className="w-5 h-5" />;
    }
};

const HeaderButtons = ({ icon, text }) => {
    return (
        <>
            <HeaderButtonsStyle>
                <ButtonIcons icon={icon} />
                <ButtonText>{text}</ButtonText>
            </HeaderButtonsStyle>
        </>
    );
};

export default HeaderButtons;
