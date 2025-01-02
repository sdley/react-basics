import Counter from "./components/Counter"

function App() {
  
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-red-500">App</h1>
        <Counter name="Counter A"/>
        <Counter name="Counter B"/>
      </div>
      
    </>
  )
}

export default App
