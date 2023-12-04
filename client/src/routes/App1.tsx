// import { useState } from 'react'

function App1() {
  // const [count, setCount] = useState(0)
  interface User {
    name: string;
    id: number;
  }

  const user: User = {
    name: "Mac",
    id: 0,
  };

  return (
    <>
      <h1 className="text-xl font-bold text-red-600">App 1 Home</h1>
      <p>{user.name}</p>
    </>
  );
}

export default App1;
