import { useState } from "react"

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap bottom-12 justify-center insert-x-0 px-100">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
          <button
            onClick={() => setcolor("Green")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{ backgroundColor: "Green" }}>Green</button>
          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}>Blue</button>
          <button
            onClick={() => setcolor("brown")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{ backgroundColor: "brown" }}>Brown</button>
          <button
            onClick={() => setcolor("black")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{ backgroundColor: "black" }}>Black</button>
          <button
            onClick={() => setcolor("white")}
            className="outline-none px-4 py-2 rounded-full text-black shadow-lg" style={{ backgroundColor: "white" }}>White</button>
          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-4 py-2 rounded-full text-black shadow-lg" style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button
            onClick={() => setcolor("purple")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{ backgroundColor: "purple" }}>Purple</button>
          <button
            onClick={() => setcolor("lavender")}
            className="outline-none px-4 py-2 rounded-full text-black shadow-lg" style={{ backgroundColor: "lavender" }}>Lavender</button>
          <button
            onClick={() => setcolor("olive")}
            className="outline-none px-4 py-2 rounded-full text-black shadow-lg" style={{ backgroundColor: "olive" }}>Olive</button>
        </div>
      </div>

    </div>
  )
}

export default App
