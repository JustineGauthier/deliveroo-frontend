import "../css/article.css";

const Article = ({
  mealTitle,
  mealDescription,
  mealPrice,
  mealImage,
  mealIsPopular,
}) => {
  return (
    <article>
      <div className="mealCard">
        <div className="mealText">
          <h3>{mealTitle}</h3>
          <p>{mealDescription}</p>
          <div className="mealInfos">
            <span className="mealInfosPrice">{mealPrice}</span>

            {mealIsPopular && (
              <span className="mealInfosPopular">
                <i className="fa-solid fa-star"></i>
                <>Populaire</>
              </span>
            )}
          </div>
        </div>
        {mealImage && (
          <div className="mealPicture">
            <img src={mealImage} alt="Meal picture" />
          </div>
        )}
      </div>
    </article>
  );
};

export default Article;
