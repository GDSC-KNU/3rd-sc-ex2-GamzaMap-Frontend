import { ContentContainer, PcContent } from '../../styles/ContentStyle';
import ChattingRoom from '../organisms/Chatting/ChattingRoom';

import Header from '../organisms/layout/Header';
import Sidebar from '../organisms/layout/Sidebar';

const PickTemplate = () => {
    return (
        <>
            <Header />
            <PcContent>
                <Sidebar />
                <ContentContainer>
                    <ChattingRoom />
                </ContentContainer>
            </PcContent>
        </>
    );
};

export default PickTemplate;
