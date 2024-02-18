import { ContentContainer, PcContent } from '../../styles/ContentStyle';
import { ChattingRoomWrapper } from '../../styles/PickStyle';

import Header from '../organisms/layout/Header';
import Sidebar from '../organisms/layout/Sidebar';
import ChatRoom from '../organisms/Pick/ChatRoom';

const PickTemplate = () => {
    return (
        <>
            <Header />
            <PcContent>
                <Sidebar />
                <ContentContainer>
                    <ChattingRoomWrapper>
                        <ChatRoom />
                        <ChatRoom />
                        <ChatRoom />
                        <ChatRoom />
                    </ChattingRoomWrapper>
                    <ChattingRoomWrapper>
                        <ChatRoom />
                        <ChatRoom />
                        <ChatRoom />
                        <ChatRoom />
                    </ChattingRoomWrapper>
                </ContentContainer>
            </PcContent>
        </>
    );
};

export default PickTemplate;
