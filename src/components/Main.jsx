import { useState } from "react";
import Section from "./Section";
import "../css/main.css";

const Main = ({ restaurantCategories }) => {
  const [selectedMeals, setSelectedMeals] = useState([]);

  const addMealToCart = (meal) => {
    const selectedMealsCopy = [...selectedMeals];

    const existingMeal = selectedMealsCopy.find(
      (selectedMeal) => selectedMeal.id === meal.id
    );

    if (existingMeal) {
      existingMeal.counter++;
    } else {
      meal.counter = 1;
      selectedMealsCopy.push(meal);
    }

    setSelectedMeals(selectedMealsCopy);
  };

  const removeMealToCart = (meal) => {
    const selectedMealsCopy = [...selectedMeals];

    if (meal.counter > 1) {
      meal.counter--;
    } else {
      const mealIndex = selectedMealsCopy.findIndex(
        (selectedMeal) => selectedMeal.id === meal.id
      );
      selectedMealsCopy.splice(mealIndex, 1);
    }

    setSelectedMeals(selectedMealsCopy);
  };

  const subTotal = selectedMeals.reduce(
    (total, meal) => total + meal.price * meal.counter,
    0
  );

  return (
    <div id="restaurantCategories">
      <div className="menuContainer">
        {restaurantCategories.map((categorie) => {
          return (
            <Section
              key={categorie.name}
              categorieName={categorie.name}
              categorieMeals={categorie.meals}
              addMealToCart={addMealToCart}
            ></Section>
          );
        })}
      </div>
      <div className="cartContainer">
        <div className="cart">
          <button className="validateCartButton">Valider mon panier</button>
          <div className="cartInfos">
            <div className="selectedMeals">
              {selectedMeals.map((meal) => {
                return (
                  <div className="meal" key={meal.id}>
                    <div className="counter">
                      <span
                        className="buttonCounter"
                        onClick={() => {
                          addMealToCart(meal);
                        }}
                      >
                        +
                      </span>
                      <span>{meal.counter}</span>
                      <span
                        className="buttonCounter"
                        onClick={() => {
                          removeMealToCart(meal);
                        }}
                      >
                        -
                      </span>
                    </div>
                    <span className="mealTitle">{meal.title}</span>
                    <p className="mealPrice">{meal.price}</p>
                  </div>
                );
              })}
            </div>
            <div className="totalDetails">
              <div>
                <span className="label">Sous total</span>
                <span className="amount">{subTotal} €</span>
              </div>
              <div>
                <span className="label">Frais de livraison</span>
                <span className="amount">2,5 €</span>
              </div>
            </div>
            <div className="totalDiv">
              <span className="label">Total</span>
              <span className="amount">{subTotal + 2.5} €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
