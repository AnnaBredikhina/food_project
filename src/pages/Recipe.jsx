import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState([]);
    const navigate = useNavigate();
    const {
        strMeal: title,
        strCategory: category,
        strArea: area,
        strMealThumb: image,
        strInstructions: instruction,
        strYoutube: video
    } = recipe;

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]));
    }, [id])

    return <>
        {
            !recipe.idMeal ? <Preloader /> : (
                <div className="recipe">
                    <div className="recipe__main">
                        <div className="recipe__image-box">
                            <img className="recipe__img" src={image} alt={title} />
                        </div>
                        <div className="recipe__info">
                            <h1 className="recipe__name">{title}</h1>
                            <h6>Category: {category}</h6>
                            {area ? <h6>Area: {area}</h6> : null}
                            <p>{instruction}</p>
                        </div>
                    </div>

                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(recipe).map(key => {
                                    if(key.includes('Ingredient') && recipe[key]) {
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>{
                                                    recipe[`strMeasure${key.slice(13)}`]
                                                    }</td>
                                            </tr>
                                        )
                                    }
                                    return null;
                                })
                            }
                        </tbody>
                    </table>

                    {video ? (
                        <div className="row">
                            <h4>Video recipe</h4>
                            <iframe
                                title={title}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                                allowFullScreen />
                        </div>
                    ) : null}
                </div>
            )
        }
        <button className="btn orange lighten-2" onClick={() => navigate(-1)}>Go back</button>
    </>
}

export { Recipe };