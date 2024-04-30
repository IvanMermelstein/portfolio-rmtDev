type SearchFormProps = {
  setSearchText: (text: string) => void;
  searchText: string;
};

const SearchForm = ({ setSearchText, searchText }: SearchFormProps) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} action="#" className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
};

export default SearchForm;
