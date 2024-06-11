import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--backend-deliveroo--nksmjkmnbqhd.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <Header
        restaurantName={data.restaurant.name}
        restaurantDescription={data.restaurant.description}
        restaurantPicture={data.restaurant.picture}
      ></Header>
      <Main restaurantCategories={data.categories}></Main>
      <footer>
        <div className="container">
          <p>fin</p>
        </div>
      </footer>
    </>
  );
};

export default App;
