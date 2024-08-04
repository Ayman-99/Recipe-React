import { useState } from 'react'
import Search from "./compontents/Search.jsx";
import FoodList from "./compontents/FoodList.jsx";
import Nav from "./compontents/Nav.jsx";

function App() {
    const [recipes, setRecipes] = useState([]);

  return (
    <div className="App">
        <Nav />
      <Search recipes={recipes} setRecipes={setRecipes} />
        <FoodList recipes={recipes} />
    </div>
  )
}

export default App
