import {
    SearchChatRoomContainer,
    SearchIconContainer,
    SearchInputItem,
} from '../../../styles/ChattingStyle';
import { IoMdSearch } from 'react-icons/io';

const SearchInput = () => {
    return (
        <>
            <SearchChatRoomContainer>
                <SearchInputItem placeholder="Search the chat room" />
                <SearchIconContainer>
                    <IoMdSearch className="w-4 h-4" />
                </SearchIconContainer>
            </SearchChatRoomContainer>
        </>
    );
};

export default SearchInput;
