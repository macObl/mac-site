import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [val, setVal] = useState("");
  const [plusClicked, setPlusClicked] = useState(false);

  //Handles Calculation
  const calculate = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      return console.log(`This Error has occured: ${error}`);
    }
  };

  const handleOperators = (e: string) => {
    //Handles Plus
    if (e === "+") {
      if (!plusClicked) {
        setVal(val + e);
        setPlusClicked(true);
      }
    } else {
      setVal(val + e);
      setPlusClicked(false);
    }
    //Handles Minus
    if (e === "-") {
      if (!plusClicked) {
        setVal(val + e);
        setPlusClicked(true);
      }
    } else {
      setVal(val + e);
      setPlusClicked(false);
    }
  };

  return (
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="border-solid border-2 border-black text-center mb-10  font-bold"
        data-text="0"
      >
        {val}
      </div>
      <div className="grid grid-cols-3 gap-1 w-80 h-80">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          value="1"
          onClick={(e) => setVal(val + (e.target as HTMLTextAreaElement).value)}
        >
          1
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          value="2"
          onClick={(e) => setVal(val + (e.target as HTMLTextAreaElement).value)}
        >
          2
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          value="3"
          onClick={(e) => setVal(val + (e.target as HTMLTextAreaElement).value)}
        >
          3
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          value="4"
          onClick={(e) => setVal(val + (e.target as HTMLTextAreaElement).value)}
        >
          4
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          value="5"
          onClick={(e) => setVal(val + (e.target as HTMLTextAreaElement).value)}
        >
          5
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          value="6"
          onClick={(e) => setVal(val + (e.target as HTMLTextAreaElement).value)}
        >
          6
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          value="7"
          onClick={(e) => setVal(val + (e.target as HTMLTextAreaElement).value)}
        >
          7
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          value="8"
          onClick={(e) => setVal(val + (e.target as HTMLTextAreaElement).value)}
        >
          8
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          value="9"
          onClick={(e) => setVal(val + (e.target as HTMLTextAreaElement).value)}
        >
          9
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          value="0"
          onClick={(e) => setVal(val + (e.target as HTMLTextAreaElement).value)}
        >
          0
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
          onClick={() => handleOperators("-")}
        >
          -
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
          onClick={() => handleOperators("+")}
        >
          +
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
          onClick={() => handleOperators("/")}
        >
          ÷
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
          onClick={() => handleOperators("*")}
        >
          x
        </button>
        <button
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
          onClick={() => calculate()}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
