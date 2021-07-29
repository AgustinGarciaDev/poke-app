import CardPokemon from "./CardPokemon";
const ListPokemont = ({ searchPokemon }) => {
  return (
    <div>
      <h3 className="textSearch">Resultado de la busqueda</h3>
      <div>
        {searchPokemon.map((pokemon) => (
          <CardPokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default ListPokemont;
