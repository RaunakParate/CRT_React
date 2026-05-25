import { useState } from "react"
import StudentCard from "./components/StudentCard";


function App() {
  const [count,setCount] = useState(0);
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> setCount(count+1)}>+</button>
    <button onClick={()=> setCount(count-1)}>-</button>
    <button onClick={()=> setCount(0)}>Reset</button>

    <StudentCard name="Ayesha" age={20} city="Pune" />
    <StudentCard name="Ravi" age={21} city="Mumbai" />
    <StudentCard name="Priya" age={19} city="Nagpur" />
    </>
  )
}

export default App
