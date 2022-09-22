import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const URL = "https://api.exchangerate.host/latest";

function App() {
  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [rate, setRate] = useState(0);

  /* useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const joke = response.data.contents.jokes[0].joke;
        setTitle(joke.title);
        setText(joke.text);
      })
      .catch((error) => {});
  }, []);*/
  async function convert(e) {
    e.preventDefault();
    try {
      const address = URL;
      const response = await fetch(address);

      if (response.ok) {
        const json = await response.json();
        console.log(json.rates.GBP);
        setRate(json.rates.GBP);

        setGbp(eur * json.rates.GBP);
      } else {
        alert("Error retrieving exchange rate.");
        console.log(response);
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div di="container">
      <form onSubmit={convert}>
        <div>
          <lable>Eur</lable>&nbsp;
          <input
            type="number"
            step="0.01"
            value={eur}
            onChange={(e) => setEur(e.target.value)}
          />
          <output>{rate}</output>
        </div>
        <div>
          <lable>Gbp</lable>
          <output>{gbp.toFixed(2)} €</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
