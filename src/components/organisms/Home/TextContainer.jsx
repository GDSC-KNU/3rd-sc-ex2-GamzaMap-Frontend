import {
    ArrowContainer,
    PotatoImgContainer,
    TextContainer01,
    TextContainer02,
    TextItem01,
    TextItem02,
} from '../../../styles/HomeStyle';

import ArrowImg from '../../../assets/HomePage/HomeArrow.svg';
import PotatoImg from '../../../assets/HomePage/gamzaIcon.svg';

const TextContainer = () => {
    return (
        <>
            <TextContainer01>
                <ArrowContainer>
                    <img src={ArrowImg} />
                </ArrowContainer>
                <TextItem01>
                    Select the function you need from the menu.
                </TextItem01>
            </TextContainer01>
            <PotatoImgContainer>
                <img src={PotatoImg} />
            </PotatoImgContainer>
            <TextContainer02>
                <TextItem02>Communicate with people with GamzaMap!</TextItem02>
            </TextContainer02>
        </>
    );
};

export default TextContainer;
