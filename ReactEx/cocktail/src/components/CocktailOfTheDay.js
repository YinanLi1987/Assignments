import { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function CocktailOfTheDay() {
  const [name, setName] = useState("");
  const [instruction, setInstruction] = useState("");
  const [img, setImg] = useState("");
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");
  

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const cocktail = response.data.drinks[0];
        console.log(cocktail);
        setName(cocktail.strDrink);
        setInstruction(cocktail.strInstructions);
        setImg(cocktail.strDrinkThumb);
        setIngredient1(cocktail.strIngredient1);
        setIngredient2(cocktail.strIngredient2);
        setIngredient3(cocktail.strIngredient3);
       
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <div className="cocktail-of-the-day">
        <div className="left-part">
          <h2>Cocktail of the day</h2>
          <h3>{name}</h3>
          <img src={img} />
        </div>

        <div className="right-part">
          <h4>Instruction and ingredients:</h4>
          <p>{instruction}</p>
          <ul>
            <li>{ingredient1}</li>
            <li>{ingredient2}</li>
            <li>{ingredient3}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CocktailOfTheDay;
