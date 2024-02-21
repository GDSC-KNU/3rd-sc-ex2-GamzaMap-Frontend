import {
    AllChatContainer,
    ChatListContainer,
    ChatNumberContainer,
    ChatNumberText,
    ChatRoomContainer,
    ChatRoomListContainer,
    ChatRoomText,
    ChatStateContainer,
    GamzaImg,
    LastChatContainer,
    LastChatText,
    Line,
    RoomContainer,
    RoomInfoContainer,
    RoomListContainer,
    StoreImg,
    StoreImgContainer,
    StoreTitleContainer,
    TitleText,
    UnreadChatContainer,
} from '../../../styles/ChattingStyle';
import SearchInput from './SearchInput';
import GamzaIcon from '../../../assets/HomePage/GamzaIcon.svg';

import ChatRoomList from './ChatRoomList';
const ChatState = () => {
    return (
        <>
            <ChatListContainer>
                <ChatRoomContainer>
                    <ChatStateContainer>
                        <AllChatContainer>
                            <GamzaImg src={GamzaIcon} />
                            All Chat
                        </AllChatContainer>
                        <Line />
                        <UnreadChatContainer>
                            <ChatRoomText>7</ChatRoomText>
                            <ChatRoomText>Unread</ChatRoomText>
                        </UnreadChatContainer>
                    </ChatStateContainer>
                    <SearchInput />
                </ChatRoomContainer>
                <ChatRoomList />
                <ChatRoomList />
            </ChatListContainer>
        </>
    );
};

export default ChatState;
