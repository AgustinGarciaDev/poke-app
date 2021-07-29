import CardPokemon from "./CardPokemon";
const ListPokemont = ({ searchPokemon }) => {
  return (
    <>
      <h3 className="textSearch">Resultado de la busqueda</h3>
      <div className="listPokemon">
        {searchPokemon.map((pokemon) => (
          <CardPokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default ListPokemont;
