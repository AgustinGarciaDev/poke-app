const SearchBar = ({ findPokemon, namePokemon, setNamePokemon }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label>
        <input
          className="search"
          placeholder="Ingresa el nombre para buscar"
          type="text"
          value={namePokemon}
          onChange={(e) => {
            setNamePokemon(e.target.value);
          }}
        />
      </label>
      <input
        onClick={() => {
          findPokemon(namePokemon);
        }}
        className="btnSearch"
        type="submit"
        value="buscar"
      />
    </form>
  );
};

export default SearchBar;
