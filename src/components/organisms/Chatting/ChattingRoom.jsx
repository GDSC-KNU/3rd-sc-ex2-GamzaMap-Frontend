import { ChattingRoomWrapper } from '../../../styles/PickStyle';
import ChatRoom from '../Pick/ChatRoom';

const ChattingRoom = () => {
    const startId = 1;
    const endId = 6;

    const storeIds = [];
    for (let i = startId; i <= endId; i++) {
        storeIds.push(i);
    }

    return (
        <>
            <ChattingRoomWrapper>
                {storeIds.slice(0, 3).map((storeId) => (
                    <ChatRoom key={storeId} storeId={storeId} />
                ))}
            </ChattingRoomWrapper>
            <ChattingRoomWrapper>
                {storeIds.slice(3).map((storeId) => (
                    <ChatRoom key={storeId} storeId={storeId} />
                ))}
            </ChattingRoomWrapper>
        </>
    );
};

export default ChattingRoom;
