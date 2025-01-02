import { useState } from "react";

function App() {
  // let count = 0;
  const [count, setCount] = useState(0);
  const handleClick = () => {
    
    setCount(count + 1);
    // count++;
    // console.log(count);
  }
  console.log(count);
  
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-red-500">App</h1>
        <div className="flex justify-between items-center m-2 bg-slate-300 p-2 rounded-sm">
        <p className="text-2xl">Counter: {count}</p>
          <button 
            className="bg-blue-500 
            hover:bg-blue-700 
            text-white 
            text-2xl
            font-bold py-2 px-4 rounded" onClick={handleClick}
            >+</button>
        </div>
      </div>
      
    </>
  )
}

export default App
