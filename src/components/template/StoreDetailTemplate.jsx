import { ContentContainer, PcContent } from '../../styles/ContentStyle';
import {
    StoreDetailContainer,
    TitleContainer,
    TitleText,
    TitleWrapper,
} from '../../styles/StoreDetailStyle';
import { StoreInfo } from '../../utils/StoreInfo';
import Info from '../organisms/StoreDetail/Info';
import StoreContent from '../organisms/StoreDetail/StoreContent';
import Header from '../organisms/layout/Header';
import Sidebar from '../organisms/layout/Sidebar';

import { useLocation } from 'react-router-dom';

const StoreDetailTemplate = () => {
    const location = useLocation();

    const storeIndex = location.state.storeIndex;
    // const { typ, title } = StoreInfo[storeIndex];
    const title = StoreInfo[storeIndex].title;
    // console.log(location.state.storeIndex);

    return (
        <>
            <Header id="header" />
            <PcContent>
                <Sidebar id="sidebar" />
                <ContentContainer id="contentContainer">
                    <StoreDetailContainer>
                        <TitleContainer>
                            <TitleWrapper>
                                <TitleText>{title}</TitleText>
                            </TitleWrapper>
                            <Info storeIndex={storeIndex} />
                        </TitleContainer>
                        <StoreContent storeIndex={storeIndex} />
                    </StoreDetailContainer>
                </ContentContainer>
            </PcContent>
        </>
    );
};

export default StoreDetailTemplate;
