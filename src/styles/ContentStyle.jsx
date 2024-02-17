import styled from 'styled-components';
// import GlobalStyle from './GlobalStyle';
// import { createGlobalStyle } from 'styled-components';

export const PcContent = styled.div`
    width: 100%;
    /* height: calc(100vh - 4rem); */
    height: 100vh;
    flex-shrink: 0;

    display: flex;
`;

export const ContentContainer = styled.div`
    display: flex;
    /* width: calc(100vw - 55rem); */
    /* width: 100vw; */
    width: calc(100vw - 6rem);
    height: calc(100vh - 4rem);
    /* padding: 150px 10px 50px 10px; */
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* background-color: var(--color-clay); */
    background-color: #ffedd5;
`;
