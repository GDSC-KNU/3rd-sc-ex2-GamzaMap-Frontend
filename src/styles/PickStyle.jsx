import styled from 'styled-components';

// export const ChattingRoom = styled.div`
//     overflow: auto;
//     background-color: #ffedd5;
//     margin: 0 0.5rem 0.5rem 0.5rem;
// `;

export const ChattingRoomContainer = styled.div`
    display: flex;
    width: 250px;
    height: 350px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    border-radius: 10px;
    border: 1px solid #a8a9aa;
    background: #fff;
`;

export const ChattingRoomWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    /* up right down left */
    margin: 1rem 0 1rem 0;
`;

export const PictureContainer = styled.div`
    display: flex;
    width: 214px;
    height: 147px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
`;

export const Picture = styled.img`
    flex: 1 0 0;
    align-self: stretch;

    border-radius: 5px;
`;

export const StoreInfoContainer = styled.div`
    display: flex;
    padding-bottom: 15px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
`;

export const TextContainer = styled.span`
    color: #000;
    font-family: Jua;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const RatingText = styled.span`
    color: #000;
    font-family: Inter;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const StarContainer = styled.div`
    display: flex;
    height: 12px;
    justify-content: center;
    align-items: center;
    gap: 2.5px;
`;

export const FillStar = styled.img`
    width: 12.5px;
    height: 12.5px;
`;

export const EmptyStar = styled.img`
    width: 12.5px;
    height: 12.5px;
`;

export const AddressContainer = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;

    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const EnterButtonContainer = styled.button`
    display: flex;
    height: 33px;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    align-self: stretch;

    border-radius: 5px;
    background: #ffd7b2;

    color: #000;
    font-family: Jua;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
