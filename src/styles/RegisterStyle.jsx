import styled from 'styled-components';

export const RegisterContainer = styled.section`
    display: flex;
    width: 400px;
    height: 450px;
    padding: 40px 50px 30px 50px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;

    margin-top: 7rem;

    border-radius: 10px;
    background: #fff;
`;

export const InputContainer = styled.div`
    width: 300px;
    height: 240px;
    flex-shrink: 0;
`;

export const TitleText = styled.h1`
    color: #000;
    font-family: Jua;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-bottom: 2rem;
`;

export const InputFormContainer = styled.form`
    display: flex;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin-bottom: 1rem;
`;

export const InputLabel = styled.label`
    display: flex;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    color: #000;
    font-family: jua;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
`;

export const InputItem = styled.input`
    height: 33px;
    align-self: stretch;

    border-radius: 5px;
    border: 1.25px solid #000;
`;

export const ButtonContainer = styled.div`
    width: 300px;
    height: 89px;
    flex-shrink: 0;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    width: 300px;
    height: 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
`;

export const ButtonItem = styled.button`
    display: flex;
    padding: 2.5px 54px;
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
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
