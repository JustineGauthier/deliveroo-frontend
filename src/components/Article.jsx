import "../css/article.css";

const Article = ({ meal, addMealToCart }) => {
  return (
    <article
      onClick={() => {
        addMealToCart(meal);
      }}
    >
      <div className="mealCard">
        <div className="mealText">
          <h3>{meal.title}</h3>
          <p>{meal.description}</p>
          <div className="mealInfos">
            <span className="mealInfosPrice">{meal.price}</span>

            {meal.popular && (
              <span className="mealInfosPopular">
                <i className="fa-solid fa-star"></i>
                <>Populaire</>
              </span>
            )}
          </div>
        </div>
        {meal.picture && (
          <div className="mealPicture">
            <img src={meal.picture} alt="Meal picture" />
          </div>
        )}
      </div>
    </article>
  );
};

export default Article;
