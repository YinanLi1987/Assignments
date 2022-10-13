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
          <div className="search-input">
            <lable>Recommend cocktail by letter</lable>
            <input
              value={letterInput}
              onChange={(e) => setLetterInput(e.target.value)}
            />
            <button onClick={() => setToggle(!toggle)}>Search</button>
            <p>For example: a, b, c ......</p>
            {toggle && (
              <div className="search-text">
                <div className="search-results-by-letter">
                  <ol>
                    {cocktails.map((cocktail) => (
                      <li key={cocktail.idDrink}>
                        <img src={cocktail.strDrinkThumb} alt="" />
                        {cocktail.strDrink}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchByLetter;
