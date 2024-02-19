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

import { MdOutlineLocationOn } from 'react-icons/md';
import { RiTimeLine, RiPhoneLine } from 'react-icons/ri';

import StoreImage from '../../../assets/StoreDetail/KEANU.png';

const StoreContent = () => {
    return (
        <>
            <StoreContentContainer>
                <StoreImgContainer>
                    <StoreImg src={StoreImage} />
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
                            <InfoText>
                                Daegu Buk-gu Daehyeon-ro 19-gil, 38
                            </InfoText>
                        </InfoTextContainer>
                        <InfoTextContainer>
                            <InfoTextTitle>
                                <IconContainer>
                                    <RiTimeLine className="w-6 h-6 mr-1" />
                                </IconContainer>
                                Business Hours
                            </InfoTextTitle>
                            <InfoText>Monday ~ Friday 08:30 ~ 24:00</InfoText>
                            <InfoText>Saturday ~ Sunday 09:00 ~ 24:00</InfoText>
                        </InfoTextContainer>
                        <InfoTextContainer>
                            <InfoTextTitle>
                                <IconContainer>
                                    <RiPhoneLine className="w-6 h-6 mr-1" />
                                </IconContainer>
                                Phone Number
                            </InfoTextTitle>
                            <InfoText>053-939-8862</InfoText>
                        </InfoTextContainer>
                    </StoreInfoContainer>
                    <ButtonContainer>
                        <ButtonText>Enter the Chat Room</ButtonText>{' '}
                    </ButtonContainer>
                </DetailContentContainer>
            </StoreContentContainer>
        </>
    );
};

export default StoreContent;
