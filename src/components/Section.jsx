import Article from "./Article";
import "../css/section.css";

const Section = ({ categorieName, categorieMeals }) => {
  return (
    <section>
      <h2>{categorieName}</h2>
      <div className="categorieMeals">
        {categorieMeals.map((meal) => {
          return (
            <Article
              key={meal.id}
              mealTitle={meal.title}
              mealDescription={meal.description}
              mealPrice={meal.price}
              mealImage={meal.picture}
              mealIsPopular={meal.popular}
            ></Article>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
