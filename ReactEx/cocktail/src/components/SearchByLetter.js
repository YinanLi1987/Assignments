import { useState } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

function SearchByLetter() {
  const [letterInput, setLetterInput] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const [toggle, setToggle] = useState(false);

  async function DisplaySearch(e) {
    e.preventDefault();
    try {
      const address = URL + letterInput;
      const response = await fetch(address);

      if (response.ok) {
        const cocktailData = await response.json();
        console.log(cocktailData.drinks);
        setCocktails(cocktailData.drinks);
      } else {
        alert("Error.");
        console.log(response);
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="search-by-letter">
      <div className="search-bar">
        <form onSubmit={DisplaySearch}>
          <div>
            <lable>Search cocktail by first letter</lable>
            <input
              value={letterInput}
              onChange={(e) => setLetterInput(e.target.value)}
            />
            <button onClick={() => setToggle(!toggle)}>Search</button>
            {toggle && (
              <div search-results-by-letter>
                <h3>Cocktail name starts with {letterInput}</h3>
                <ol>
                  {cocktails.map((cocktail) => (
                    <li key={cocktail.idDrink}>
                      {cocktail.strDrink}
                      <img src={cocktail.strDrinkThumb} alt="" />
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchByLetter;
