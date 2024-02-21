import { SearchInputContainer } from '../../../styles/HeaderStyle';

const SearchInput = () => {
	return (
		<>
			<SearchInputContainer
				// type="search"
				id="searchBar"
				// className="block w-full p-4 pe-10 text-lg text-gray-900 border border-gry-1 rounded-xl"
				placeholder="Please search for a place"
				// required
			/>
		</>
	);
};

export default SearchInput;
