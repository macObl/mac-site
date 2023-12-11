import { useEffect, useState } from "react";

function TicTacToe() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Player ${count}`);
    count - 1;
    console.log(`Player ${count}`);
  }, [count]);

  return (
    <div className="grid grid-cols-3 gap-1 w-80 h-80">
      <span
        className="p-10 bg-gray-300"
        onClick={() => setCount(count + 1)}
      ></span>
      <span
        className="p-10 bg-gray-300"
        onClick={() => setCount(count + 1)}
      ></span>{" "}
      <span
        className="p-10 bg-gray-300"
        onClick={() => setCount(count + 1)}
      ></span>{" "}
      <span
        className="p-10 bg-gray-300"
        onClick={() => setCount(count + 1)}
      ></span>{" "}
      <span
        className="p-10 bg-gray-300"
        onClick={() => setCount(count + 1)}
      ></span>{" "}
      <span
        className="p-10 bg-gray-300"
        onClick={() => setCount(count + 1)}
      ></span>{" "}
      <span
        className="p-10 bg-gray-300"
        onClick={() => setCount(count + 1)}
      ></span>{" "}
      <span
        className="p-10 bg-gray-300"
        onClick={() => setCount(count + 1)}
      ></span>{" "}
      <span
        className="p-10 bg-gray-300"
        onClick={() => setCount(count + 1)}
      ></span>{" "}
    </div>
  );
}

export default TicTacToe;
