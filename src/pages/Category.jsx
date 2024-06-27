import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealsList } from "../components/MealsList";

function Category() {
    const { name } = useParams();
    const navigate = useNavigate();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    }, [name])

    return <>
        <button className="btn orange lighten-2" onClick={() => navigate(-1)}>Go back</button>
        {
            !meals.length ? <Preloader /> : <MealsList meals={meals} />
        }
    </>
}

export { Category };