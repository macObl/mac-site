// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App1 from "./routes/App1";
import App2 from "./routes/App2";
import App3 from "./routes/App3";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App1 />} />
        <Route path="/App2" element={<App2 />} />
        <Route path="/App3" element={<App3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
