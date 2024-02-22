import { ContentContainer, PcContent } from '../../styles/ContentStyle';
import { MAP_API_KEY } from '../../utils/URL';

import Map from '../organisms/Map/Map';
import Header from '../organisms/layout/Header';
import Sidebar from '../organisms/layout/Sidebar';

import { Wrapper } from '@googlemaps/react-wrapper';

const MapTemplate = () => {
    return (
        <>
            <Header id="header" />
            <PcContent>
                <Sidebar id="sidebar" />
                <ContentContainer id="contentContainer">
                    <Wrapper apiKey={MAP_API_KEY} libraries={['places']}>
                        <Map />
                    </Wrapper>
                </ContentContainer>
            </PcContent>
        </>
    );
};

export default MapTemplate;
