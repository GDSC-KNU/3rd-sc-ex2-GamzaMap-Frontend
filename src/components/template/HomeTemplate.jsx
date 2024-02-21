import { ContentContainer, PcContent } from '../../styles/ContentStyle';
import { HomeContainer } from '../../styles/HomeStyle';
import TextContainer from '../organisms/Home/TextContainer';
import Header from '../organisms/layout/Header';
import Sidebar from '../organisms/layout/Sidebar';

const HomeTemplate = () => {
    return (
        <>
            <Header id="header" />
            <PcContent>
                <Sidebar id="sidebar" />
                <ContentContainer id="contentContainer">
                    <HomeContainer>
                        <TextContainer />
                    </HomeContainer>
                </ContentContainer>
            </PcContent>
        </>
    );
};

export default HomeTemplate;
