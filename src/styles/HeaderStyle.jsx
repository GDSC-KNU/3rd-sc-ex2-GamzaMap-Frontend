import styled from 'styled-components';

export const TextContainer = styled.div`
	color: #000;
	font-family: Jua;
	font-size: 2rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;

	margin-left: 1rem;
`;

export const HeaderContainer = styled.header`
	display: flex;
	width: 100%;
	height: 4rem;
	padding: 0.5rem 0.8rem;
	justify-content: space-between;
	align-items: center;
	flex-shrink: 0;
	align-self: stretch;
	background-color: #ffedd5;
`;

export const LeftContainer = styled.div`
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
	flex-shrink: 0;
	align-self: stretch;
	width: calc(100% - 50px);
`;

export const SearchInputContainer = styled.input`
	font-family: 'Jua';
	width: 100%;
`;

export const InputContainer = styled.div`
	display: flex;
	width: 25rem;
	height: 2.5rem;
	padding: 5px 5px 5px 10px;
	justify-content: start;
	align-items: center;

	border-radius: 8px;
	border: 2px solid #626161;
	background: #fff;

	margin: 1.5rem 1.5rem;

	flex-shrink: 0;
`;

export const HeaderButtonContainer = styled.div`
	display: flex;
	width: 50rem;
	height: 2rem;
	align-items: center;
	gap: 1.5rem;
`;

export const HeaderButtonsStyle = styled.button`
	display: inline-flex;
	height: 25px;
	padding: 1.2rem 1rem;
	justify-content: center;
	align-items: center;
	gap: 5px;

	border-radius: 30px;
	border: 2px solid #626161;
	background: #fff;
`;

export const ButtonText = styled.span`
	color: #626161;
	font-family: Jua;
	font-size: 1.2rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	margin: 0.5rem;
`;

export const ProfileContainer = styled.div`
	display: flex;
	width: 50px;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	align-self: stretch;
`;

export const ProfileButtonStyle = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex: 1 0 0;
	align-self: stretch;
`;
