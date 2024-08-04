import Fooditem from "./Fooditem.jsx";

export default function FoodList({recipes}) {
    return (
        <div>
            {recipes.map((recipe) => (
                <Fooditem key={recipe.id} recipe={recipe} />
            ))}
        </div>
    )
}