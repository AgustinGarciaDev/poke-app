import axios from "axios";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
const App = () => {
  const [listPokemon, setListPokemon] = useState([]);
  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1118"
      );
      setListPokemon(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <Home listPokemon={listPokemon} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </>
  );
};
export default App;
