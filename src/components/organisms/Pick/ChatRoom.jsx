import {
    AddressContainer,
    AddressText,
    ChattingRoomContainer,
    EnterButtonContainer,
    FillStar,
    Picture,
    PictureContainer,
    RatingContainer,
    RatingText,
    StarContainer,
    StoreInfoContainer,
    TextContainer,
} from '../../../styles/PickStyle';

import FillStarImg from '../../../assets/Pick/FillStarImage.svg';

import { StoreInfo } from '../../../utils/StoreInfo';

import { useNavigate } from 'react-router-dom';

const ChatRoom = ({ storeId }) => {
    const storeIndex = parseInt(storeId) - 1;
    const { title, address01, address02, image, star, review } =
        StoreInfo[storeIndex];

    const navigate = useNavigate();

    let storeData = {
        storeIndex,
    };

    return (
        <>
            <ChattingRoomContainer>
                <PictureContainer>
                    <Picture src={image} alt="PickImg" />
                </PictureContainer>
                <StoreInfoContainer>
                    <TextContainer>{title}</TextContainer>
                    <RatingContainer>
                        <StarContainer>
                            <FillStar src={FillStarImg} alt="FillStarImg" />
                        </StarContainer>
                        <RatingText>{star}</RatingText>
                        <RatingText>• Visitor Review {review}</RatingText>
                    </RatingContainer>
                    <AddressContainer>
                        <AddressText>{address01}</AddressText>
                        <AddressText>{address02}</AddressText>
                    </AddressContainer>
                </StoreInfoContainer>
                <EnterButtonContainer
                    onClick={() =>
                        navigate(`/pick/detail`, { state: storeData })
                    }
                >
                    View details
                    {/* <a href="/pick/detail">Enter the chat room</a> */}
                </EnterButtonContainer>
            </ChattingRoomContainer>
        </>
    );
};

export default ChatRoom;
