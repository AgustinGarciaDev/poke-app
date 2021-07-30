import { useState } from "react";
import { toast } from "react-toastify";
import ListPokemont from "../Components/ListPokemont";
import SearchBar from "../Components/SearchBar";
import Welcome from "../Components/Welcome";
import Error from "../Components/Error";
const Home = ({ listPokemon }) => {
  const [searchPokemon, setSearchPokemon] = useState([]);
  const [namePokemon, setNamePokemon] = useState("");
  const [errorSearch, setErrorSearch] = useState(false);

  const findPokemon = (namePokemon) => {
    if (namePokemon.length === 0) {
      toast.error("Debe ingresar el nombre de un pokemon", {
        toastId: "error",
      });
    } else {
      const result = listPokemon.filter(
        (pokemon) =>
          pokemon.name.slice(0, namePokemon.trim().length).toLowerCase() ===
          namePokemon.trim().toLowerCase()
      );

      if (result.length === 0) {
        setErrorSearch(true);
      } else {
        if (errorSearch !== false) {
          setErrorSearch(false);
        }
        setSearchPokemon(result);
      }
    }
  };

  return (
    <>
      <main>
        <section className="containerHero">
          <h2 className="titleHero">El que quiere pokemon, que los busque</h2>
          <SearchBar
            setNamePokemon={setNamePokemon}
            namePokemon={namePokemon}
            findPokemon={findPokemon}
          />
        </section>
        <section>
          {errorSearch ? (
            <Error />
          ) : searchPokemon.length === 0 ? (
            <Welcome />
          ) : (
            <ListPokemont searchPokemon={searchPokemon} />
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
