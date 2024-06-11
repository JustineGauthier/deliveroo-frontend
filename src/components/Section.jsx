import Article from "./Article";
import "../css/section.css";

const Section = ({ categorieName, categorieMeals, addMealToCart }) => {
  return (
    <section>
      <h2>{categorieName}</h2>
      <div className="categorieMeals">
        {categorieMeals.map((meal) => {
          return (
            <Article
              key={meal.id}
              meal={meal}
              addMealToCart={addMealToCart}
            ></Article>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
