import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
const URL = "http://localhost:3006/";

function App() {
  const [message, setMessage] = useState("test");

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage(error);
      });
  }, []);

  return (
    <div>
      <h3>This message was retrieved from my NodeJS server</h3>
      <p>{message}</p>
    </div>
  );
}

export default App;
