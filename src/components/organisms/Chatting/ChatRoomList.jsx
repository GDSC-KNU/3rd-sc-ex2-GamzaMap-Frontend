import {
    ChatNumberContainer,
    ChatNumberText,
    ChatRoomListContainer,
    ChatTimeTextContainer,
    LastChatContainer,
    LastChatText,
    RoomContainer,
    RoomInfoContainer,
    RoomListContainer,
    RoomTitleContainer,
    StoreImg,
    StoreImgContainer,
    StoreTitleContainer,
    TitleText,
} from '../../../styles/ChattingStyle';
import StoreImage from '../../../assets/Chatting/StorePicture.png';

const ChatRoomList = () => {
    return (
        <>
            <ChatRoomListContainer id="chatRoomListContainer">
                <RoomListContainer id="roomListContainer">
                    <RoomContainer id="roomContainer">
                        <StoreImgContainer>
                            <StoreImg src={StoreImage} />
                        </StoreImgContainer>
                        <RoomInfoContainer>
                            <RoomTitleContainer>
                                <StoreTitleContainer>
                                    <TitleText>Baek So-jeong</TitleText>
                                    <ChatNumberText>34</ChatNumberText>
                                </StoreTitleContainer>
                                <ChatTimeTextContainer>
                                    3:24 PM
                                </ChatTimeTextContainer>
                            </RoomTitleContainer>

                            <LastChatContainer>
                                <LastChatText>
                                    15~17시까지 브레이크타임...
                                </LastChatText>
                                <ChatNumberContainer>5</ChatNumberContainer>
                            </LastChatContainer>
                        </RoomInfoContainer>
                    </RoomContainer>
                </RoomListContainer>
            </ChatRoomListContainer>
        </>
    );
};

export default ChatRoomList;
