import {
    InfoContainer,
    RatingContainer,
    RatingFillStar,
    TextContainer,
    TypeText01,
} from '../../../styles/StoreDetailStyle';

import FillStar from '../../../assets/StoreDetail/FillStarImage.svg';
import { StoreInfo } from '../../../utils/StoreInfo';

const Info = ({ storeIndex }) => {
    // const storeType = storeIndex

    const { type, star, review } = StoreInfo[storeIndex];
    // const { StoreType, star, review } = StoreInfo[0];
    // const type = storeType;
    return (
        <>
            <InfoContainer>
                <TextContainer>
                    <TypeText01>{type}</TypeText01>
                    <TypeText01>·</TypeText01>
                    <TypeText01>Rating</TypeText01>
                </TextContainer>

                <RatingContainer>
                    <RatingFillStar src={FillStar} />
                    <TypeText01>{star}</TypeText01>
                </RatingContainer>

                <TypeText01>&nbsp;·</TypeText01>

                <TypeText01>Review {review}</TypeText01>
            </InfoContainer>
        </>
    );
};

export default Info;
