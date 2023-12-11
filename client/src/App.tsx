// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import WeatherApp from "./routes/WeatherApp";
import BookSearch from "./routes/BookSearch";
import ToDoList from "./routes/ToDoList";
import TicTacToe from "./routes/TicTacToe";
import Calculator from "./routes/Calculator";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/book-search" element={<BookSearch />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/to-do-list" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
