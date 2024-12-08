import { useState, useEffect } from "react";
import ThemeContext from "./Context";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");

        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("error in fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Country List</h1>
      {data.map((item) => (
        <div className="container" key={item.id}>
          console.log(item.id)
          <h1>item.name</h1>
          <img src="item.image" alt="item.title" />
          <p>item.population</p>
          <h4>item.egion</h4>
          <h5>item.capital</h5>
        </div>
      ))}
    </>
  );
}

export default App;
