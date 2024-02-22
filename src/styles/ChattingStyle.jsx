import styled from 'styled-components';

export const ChatListContainer = styled.section`
    /* display: flex; */
    width: 250px;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
`;

export const ChatRoomContainer = styled.div`
    display: flex;
    padding: 15px 22px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    align-self: stretch;

    background: #dfc6b0;
`;

export const ChatStateContainer = styled.div`
    display: flex;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`;

export const AllChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;

    color: #fff;
    font-family: Jua;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 19.5px */
    letter-spacing: -0.247px;
`;

export const Line = styled.hr`
    width: 1px;
    height: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;
    background: #c3ac97;
    margin-left: 1.25rem;
`;

export const GamzaImg = styled.img`
    width: 25px;
    height: 25px;
`;

export const UnreadChatContainer = styled.div`
    display: flex;
    padding: 2.5px 11px 0px 11px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
`;
export const ChatRoomText = styled.span`
    /* display: flex;
    justify-content: center;
    align-items: center; */

    color: rgba(255, 255, 255, 0.5);
    font-family: Jua;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 22.5px */
    letter-spacing: -0.285px;
`;

export const SearchChatRoomContainer = styled.div`
    display: flex;
    padding: 10px;
    justify-content: flex-end;
    align-items: center;
    /* gap: 20px; */
    align-self: stretch;

    border-radius: 5px;
    border: 1px solid #bfa893;
    background: rgba(255, 233, 213, 0.3);

    /* color: rgba(125, 78, 37, 0.22); */
    font-family: Jua;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const SearchInputItem = styled.input`
    /* width: 100%;
    height: 100%;
    border: none;
    
    font-style: normal;
    font-weight: 400;
    line-height: normal; */

    width: 100%;

    background: none;
    /* color: #7d4e25; */
    font-family: Jua;
    font-size: 0.8rem;
`;

export const SearchIconContainer = styled.button`
    width: 16px;
    /* height: 16px; */

    fill: rgba(125, 78, 37, 0.22);

    color: rgba(125, 78, 37, 0.22);
`;

export const ChatRoomListContainer = styled.div`
    display: flex;
    padding: 8px 0px;
    flex-direction: column;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    height: 30rem;
    /* justify-content: flex-start; */
    background: #fff;
`;

export const RoomListContainer = styled.div`
    display: flex;
    padding: 15px 0px;
    justify-content: center;
    align-items: center;
    gap: 15px;
    align-self: stretch;

    border-bottom: 1px solid #f7f7f7;
    background: #fff;
`;

export const RoomContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const StoreImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StoreImg = styled.img`
    width: 40px;
    height: 40px;

    border-radius: 10px;
`;

export const RoomInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    align-self: stretch;
`;

export const RoomTitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const LastChatContainer = styled.div`
    display: flex;
    height: 13px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const LastChatText = styled.span`
    color: #a8a9aa;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const ChatNumberContainer = styled.div`
    display: flex;
    padding: 0px 7.5px;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    border-radius: 20px;
    background: #f00;

    color: #fff;
    font-family: Jua;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const StoreTitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const TitleText = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: #000;
    font-family: Jua;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const ChatNumberText = styled.span`
    display: flex;
    align-items: center;

    color: #a8a9aa;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const ChatTimeTextContainer = styled.span`
    width: 40px;
    color: #a8a9aa;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
