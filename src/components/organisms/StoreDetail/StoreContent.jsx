import {
    ButtonContainer,
    ButtonText,
    DetailContentContainer,
    DetailTitle,
    IconContainer,
    InfoText,
    InfoTextContainer,
    InfoTextTitle,
    StoreContentContainer,
    StoreImg,
    StoreImgContainer,
    StoreInfoContainer,
} from '../../../styles/StoreDetailStyle';
import { StoreInfo } from '../../../utils/StoreInfo';
// import StoreImage from '../../../assets/StoreDetail/KEANU.png';

import { MdOutlineLocationOn } from 'react-icons/md';
import { RiTimeLine, RiPhoneLine } from 'react-icons/ri';

const StoreContent = ({ storeIndex }) => {
    // const location = useLocation();

    // console.log(location.state.storeId);

    const { address01, address02, hour01, hour02, Detail, number } =
        StoreInfo[storeIndex];

    console.log(storeIndex);

    return (
        <>
            <StoreContentContainer>
                <StoreImgContainer>
                    <StoreImg src={Detail} />
                </StoreImgContainer>
                <DetailContentContainer>
                    <DetailTitle>Detail</DetailTitle>
                    <StoreInfoContainer>
                        <InfoTextContainer>
                            <InfoTextTitle>
                                <IconContainer>
                                    <MdOutlineLocationOn className="w-7 h-7" />
                                </IconContainer>
                                Address
                            </InfoTextTitle>
                            <InfoText>{address01 + ' ' + address02}</InfoText>
                        </InfoTextContainer>
                        <InfoTextContainer>
                            <InfoTextTitle>
                                <IconContainer>
                                    <RiTimeLine className="w-6 h-6 mr-1" />
                                </IconContainer>
                                Business Hours
                            </InfoTextTitle>
                            <InfoText>{hour01}</InfoText>
                            <InfoText>{hour02}</InfoText>
                        </InfoTextContainer>
                        <InfoTextContainer>
                            <InfoTextTitle>
                                <IconContainer>
                                    <RiPhoneLine className="w-6 h-6 mr-1" />
                                </IconContainer>
                                Phone Number
                            </InfoTextTitle>
                            <InfoText>{number}</InfoText>
                        </InfoTextContainer>
                    </StoreInfoContainer>
                    <ButtonContainer>
                        <ButtonText>Enter the Chat Room</ButtonText>
                    </ButtonContainer>
                </DetailContentContainer>
            </StoreContentContainer>
        </>
    );
};

export default StoreContent;
