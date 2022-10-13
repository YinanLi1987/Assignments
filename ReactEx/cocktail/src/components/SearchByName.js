import { useState } from "react";
import { Link } from "react-router-dom";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function SearchByName() {
  const [cocktailNameInput, setCocktail] = useState("");
  const [cocktailInstruction, setCocktailInstruction] = useState("");
  const [cocktailImg, setCocktailImg] = useState("");
  const [cocktailName, setCocktailName] = useState("");
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");
  const [toggle, setToggle] = useState(false);

  async function DisplaySearch(e) {
    e.preventDefault();
    try {
      const address = URL + cocktailNameInput;
      const response = await fetch(address);

      if (response.ok) {
        const cocktail = await response.json();
        console.log(cocktail.drinks);
        setCocktailInstruction(cocktail.drinks[0].strInstructions);
        setCocktailImg(cocktail.drinks[0].strDrinkThumb);
        setIngredient1(cocktail.drinks[0].strIngredient1);
        setIngredient2(cocktail.drinks[0].strIngredient2);
        setIngredient3(cocktail.drinks[0].strIngredient3);
        setCocktailName(cocktailNameInput);
      } else {
        alert("Error.");
        console.log(response);
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="container">
      <div className="search-bar">
        <form onSubmit={DisplaySearch}>
          <div>
            <lable>Search cocktail by name</lable>
            <input
              value={cocktailNameInput}
              onChange={(e) => setCocktail(e.target.value)}
            />
            <button onClick={() => setToggle(!toggle)}>Search</button>
            {toggle && (
              <div className="search-result">
                <div className="result-left">
                  <h1>{cocktailName}</h1>
                  <img src={cocktailImg} />
                </div>

                <div className="result-right">
                  <h4>Instruction and ingredients:</h4>
                  <p>{cocktailInstruction}</p>
                  <ul>
                    <li>{ingredient1}</li>
                    <li>{ingredient2}</li>
                    <li>{ingredient3}</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchByName;
