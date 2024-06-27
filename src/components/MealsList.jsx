import { MealItem } from "./MealItem";

function MealsList({meals}) {
    return <div className="meals">
        {
            meals.map(meal => (
                <MealItem key={meal.idMeal} {...meal} />
            ))
        }
    </div>
}

export { MealsList };