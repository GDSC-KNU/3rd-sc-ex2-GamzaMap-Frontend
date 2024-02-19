import {
    DotImg,
    InfoContainer,
    RatingContainer,
    RatingEmptyStar,
    RatingFillStar,
    TextContainer,
    TypeText01,
    TypeText02,
} from '../../../styles/StoreDetailStyle';

import FillStar from '../../../assets/StoreDetail/FillStarImage.svg';
import EmptyStar from '../../../assets/StoreDetail/EmptyStarImage.svg';
import Dot from '../../../assets/StoreDetail/DotImg.svg';

const Info = () => {
    return (
        <>
            <InfoContainer>
                <TextContainer>
                    <TypeText01>Cafe</TypeText01>
                </TextContainer>
                <TextContainer>
                    <DotImg src={Dot} />
                </TextContainer>
                <TextContainer>
                    <TypeText02>Rating</TypeText02>
                </TextContainer>

                <TextContainer>
                    <RatingContainer>
                        <RatingFillStar src={FillStar} />
                        <RatingFillStar src={FillStar} />
                        <RatingFillStar src={FillStar} />
                        <RatingFillStar src={FillStar} />
                        <RatingEmptyStar src={EmptyStar} />
                    </RatingContainer>
                </TextContainer>
            </InfoContainer>
        </>
    );
};

export default Info;
