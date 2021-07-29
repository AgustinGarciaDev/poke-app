import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ListPokemont from "../Components/ListPokemont";
import SearchBar from "../Components/SearchBar";
import Welcome from "../Components/Welcome";
import Error from "../Components/Error";
const Home = () => {
  const [listPokemon, setListPokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState([]);
  const [namePokemon, setNamePokemon] = useState("");
  const [errorSearch, setErrorSearch] = useState(false);
  /*   const [loading, setLoading] = useState(true); */
  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1118"
      );
      setListPokemon(response.data.results);
      /*  setLoading(!loading); */
    } catch (err) {
      console.log(err);
    }
  };

  const findPokemon = (namePokemon) => {
    if (namePokemon.length === 0) {
      toast.error("Debe ingresar el nombre de un pokemon", {
        toastId: "error",
      });
    } else {
      const result = listPokemon.filter(
        (pokemon) =>
          pokemon.name.slice(0, namePokemon.length).toLowerCase() ===
          namePokemon.toLowerCase()
      );
      if (result.length === 0) {
        setErrorSearch(!errorSearch);
      } else {
        if (errorSearch !== false) {
          setErrorSearch(!errorSearch);
        }
        setSearchPokemon(result);
      }
    }
  };

  /*   if (loading) {
    return <h1>Loading</h1>;
  } */
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
