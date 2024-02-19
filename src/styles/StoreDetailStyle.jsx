import styled from 'styled-components';

export const StoreDetailContainer = styled.section`
    display: flex;
    width: 915px;
    height: 594px;
    padding: 30px 50px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;

    margin-top: 2rem;

    border-radius: 20px;
    background: #fff;
`;

export const TitleContainer = styled.section`
    display: flex;
    width: 507px;
    height: 117px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    border-radius: 10px;
    border: 1px solid #767474;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TitleText = styled.h1`
    color: #000;
    font-family: Jua;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const InfoContainer = styled.div`
    display: flex;
    width: 172px;
    padding: 5px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const TypeText01 = styled.span`
    color: #000;
    font-family: Jua;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const TypeText02 = styled.span`
    color: #000;
    font-family: Jua;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const RatingContainer = styled.div`
    display: flex;
    height: 12px;
    justify-content: center;
    align-items: center;
    gap: 2.5px;
`;

export const RatingFillStar = styled.img`
    width: 12.5px;
    height: 11.875px;

    fill: #ffd233;
`;

export const RatingEmptyStar = styled.img`
    width: 12.5px;
    height: 12.5px;

    fill: #767474;
`;

export const DotImg = styled.img`
    width: 7.5px;
    height: 7.5px;
`;

export const StoreContentContainer = styled.section`
    display: flex;
    padding: 20px 29px;
    align-items: flex-start;
    gap: 20px;
    flex: 1 0 0;
    align-self: stretch;
`;
export const StoreImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;

    border-radius: 10px;
`;

export const StoreImg = styled.img`
    width: 400px;
    height: 357px;
    align-self: stretch;
    border-radius: 10px;
`;

export const DetailContentContainer = styled.section`
    display: flex;
    width: 306px;
    padding-right: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
`;

export const DetailTitle = styled.h2`
    display: flex;
    padding: 5px 1rem;
    align-items: flex-start;
    gap: 10px;

    border-radius: 5px;
    background: #ffeddc;

    color: #000;
    font-family: Jua;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const StoreInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    /* flex: 1 0 0; */
    align-self: stretch;
`;

export const InfoTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;

    margin-bottom: 1rem;
`;

export const InfoTextTitle = styled.span`
    display: flex;
    align-items: flex-start;

    color: #aba9aa;
    font-family: Jua;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-bottom: 0.25rem;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    /* margin-right: 5px; */
    color: #aba9aa;
`;

export const InfoText = styled.span`
    color: #000;
    font-family: Jua;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    text-indent: 1.5rem;

    margin-top: 0.25rem;
`;

export const ButtonContainer = styled.button`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;

    border-radius: 10px;
    background: #ffd7b2;
`;

export const ButtonText = styled.span`
    color: #000;
    font-family: Jua;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
