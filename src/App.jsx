import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--backend-deliveroo--nksmjkmnbqhd.code.run/"
      );
      setData(response.data);
      setIsLoading(false);
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
      <main>
        <div id="restaurantCategories">
          <div className="menuContainer">
            {data.categories.map((categorie) => {
              return (
                <Section
                  key={categorie.name}
                  categorieName={categorie.name}
                  categorieMeals={categorie.meals}
                ></Section>
              );
            })}
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          <p>fin</p>
        </div>
      </footer>
    </>
  );
}

export default App;
