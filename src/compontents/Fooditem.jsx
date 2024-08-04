import styles from './fooditem.module.css';
export default function Fooditem({recipe}) {
    return (
        <div className={styles.foodContainer}>
            <img className={styles.foodImage} src={recipe.image} alt=""/>
            <h1 className={styles.foodTitle}>{recipe.title}</h1>
            <button className={styles.foodButton}>View Recipe</button>
        </div>
    )
}