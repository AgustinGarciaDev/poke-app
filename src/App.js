import axios from "axios";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
const App = () => {
  const [listPokemon, setListPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1118"
      );
      setListPokemon(response.data.results);
      setLoading(!loading);
    } catch (err) {
      setLoading(!loading);
      console.log(err);
      toast.error(
        "A ocurrido un error en el servidor intente mas tarde nuevamente",
        {
          toastId: "error",
        }
      );
    }
  };

  if (loading) {
    return (
      <div className="spinerContainer">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Home listPokemon={listPokemon} />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      <ToastContainer />
    </>
  );
};
export default App;
