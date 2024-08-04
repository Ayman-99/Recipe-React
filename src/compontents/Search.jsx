import {useEffect, useState} from "react";
import styles from './search.module.css';
const API_KEY = '2c16b9e63bb7457e949fdbd610731b88';
const url = 'https://api.spoonacular.com/recipes/complexSearch'
export default function Search({setRecipes}) {
    const [query, setQuery] = useState('pizza');
    useEffect(() => { //first is callback, second is array of dependecies
        async function FetchFood(){
           const res = await fetch(`${url}?apiKey=${API_KEY}&query=${query}`);
           const data = await res.json();
           setRecipes(data.results);
        }
        FetchFood();
    }, [query]); //deps is array of dependecies
    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.searchInput}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}/>
        </div>
    )
}