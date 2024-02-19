import { ContentContainer, PcContent } from '../../styles/ContentStyle';
import {
    StoreDetailContainer,
    TitleContainer,
    TitleText,
    TitleWrapper,
} from '../../styles/StoreDetailStyle';
import Info from '../organisms/StoreDetail/Info';
import StoreContent from '../organisms/StoreDetail/StoreContent';
import Header from '../organisms/layout/Header';
import Sidebar from '../organisms/layout/Sidebar';

const StoreDetailTemplate = () => {
    return (
        <>
            <Header id="header" />
            <PcContent>
                <Sidebar id="sidebar" />
                <ContentContainer id="contentContainer">
                    <StoreDetailContainer>
                        <TitleContainer>
                            <TitleWrapper>
                                <TitleText>KEANU</TitleText>
                            </TitleWrapper>
                            <Info />
                        </TitleContainer>
                        <StoreContent />
                    </StoreDetailContainer>
                </ContentContainer>
            </PcContent>
        </>
    );
};

export default StoreDetailTemplate;
