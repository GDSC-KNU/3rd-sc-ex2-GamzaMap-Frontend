import { ContentContainer, PcContent } from '../../styles/ContentStyle';
import Header from '../organisms/layout/Header';
import Sidebar from '../organisms/layout/Sidebar';
// import ChatRoom from '../organisms/Chatting/ChatRoom';
import ChatState from '../organisms/Chatting/ChatState';
// import ChatRoomList from '../organisms/Chatting/ChatRoomList';

const ChattingTemplate = () => {
    return (
        <>
            <Header id="header" />
            <PcContent>
                <Sidebar id="sidebar" />
                <ContentContainer id="contentContainer">
                    <ChatState />
                </ContentContainer>
            </PcContent>
        </>
    );
};

export default ChattingTemplate;
