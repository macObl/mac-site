import { useState } from "react";

const API_KEY: string = "e9cf0dee16be4c2ab88200548230812";

function TaskManager() {
  const [input, setInput] = useState("");

  if (input) {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${input} `
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  // const [count, setCount] = useState(0)
  // console.log(weather);

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="input"
        value={input}
        placeholder="Enter City"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
    </div>
  );
}

export default TaskManager;
