import { Link } from "react-router-dom";

function MealItem(props) {
    const {
        idMeal: id,
        strMeal: title,
        strMealThumb: image
    } = props;

    return <div className="card">
        <div className="card-image">
            <img src={image} alt={title} />
        </div>
        <div className="card-content">
            <span className="card-title">{title}</span>
        </div>
        <div className="card-action">
            <Link to={`meal/${id}`}>Watch recipe</Link>
        </div>
    </div>
}

export { MealItem };