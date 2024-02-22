import {
    AllChatContainer,
    ChatListContainer,
    ChatRoomContainer,
    ChatRoomText,
    ChatStateContainer,
    GamzaImg,
    Line,
    UnreadChatContainer,
} from '../../../styles/ChattingStyle';
import SearchInput from './SearchInput';
import GamzaIcon from '../../../assets/HomePage/gamzaIcon.svg';

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
