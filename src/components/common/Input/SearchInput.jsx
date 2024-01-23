const SearchInput = () => {
	return (
		<>
			<input
				type="search"
				id="searchBar"
				className="block w-full p-4 pe-10 text-lg text-gray-900 border border-gry-1 rounded-xl"
				placeholder="장소를 검색해주세요"
				required
			/>
		</>
	);
};

export default SearchInput;
