import axios from "axios";
import { useEffect, useState } from "react";

const CardPokemon = ({ pokemon: { url, name } }) => {
  const [imgPokemon, setImgPokemon] = useState(null);

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPokemon = async () => {
    try {
      const response = await axios.get(url);
      setImgPokemon(response.data.sprites.front_default);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="containerPokemon">
      <img src={imgPokemon} alt="Fotito pai" />
      <h4>{name}</h4>
    </div>
  );
};

export default CardPokemon;
