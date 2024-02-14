import {
    AddressContainer,
    ChattingRoomContainer,
    EmptyStar,
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

import PickImg from '../../../assets/Pick/PickPicture.png';
import FillStarImg from '../../../assets/Pick/FillStarImage.svg';
import EmptyStarImg from '../../../assets/Pick/EmptyStarImage.svg';

const ChatRoom = () => {
    return (
        <>
            <ChattingRoomContainer>
                <PictureContainer>
                    <Picture src={PickImg} alt="PickImg" />
                </PictureContainer>
                <StoreInfoContainer>
                    <TextContainer>Goni Table</TextContainer>
                    <RatingContainer>
                        <RatingText>4.0</RatingText>
                        <StarContainer>
                            <FillStar src={FillStarImg} alt="FillStarImg" />
                            <FillStar src={FillStarImg} alt="FillStarImg" />
                            <FillStar src={FillStarImg} alt="FillStarImg" />
                            <FillStar src={FillStarImg} alt="FillStarImg" />
                            <EmptyStar src={EmptyStarImg} alt="EmptyStarImg" />
                        </StarContainer>
                        <RatingText>(56)</RatingText>
                    </RatingContainer>
                    <AddressContainer>
                        Daegu Buk-gu Sangyeok-ro 6-gil 1393-13
                    </AddressContainer>
                </StoreInfoContainer>
                <EnterButtonContainer>Enter the chat room</EnterButtonContainer>
            </ChattingRoomContainer>
        </>
    );
};

export default ChatRoom;
