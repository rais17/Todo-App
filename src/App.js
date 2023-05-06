import { useState } from "react";
import "./App.css";
import TodoGetter from "./Components/TodoGetter";
import TodoList from "./Components/TodoList";

function App() {

  const [task, setTask] = useState([]);
  let listItem = task.length;
  return (
    <div className="w-screen min-h-screen bg-[#1E1E1E] grid items-center">
      <div className="w-1/3 space-y-5 mx-auto border bg-[#2C2C2C] py-5 pl-2">
        <h1 className="font-sans text-white italic text-4xl font-bold text-center">
          TO-DO NOW
        </h1>
        <TodoGetter task={task} setTask={setTask}></TodoGetter>
        <TodoList task={task} setTask={setTask}></TodoList>
        <div className="flex flex-col justify-center gap-2 items-center font-sans text-2xl font-bold text-white opacity-60">
          <p>{listItem ? `You have ${listItem} Todo` : `You Have No Todo`}</p>
          <button className="bg-[#1E1E1E] px-10 rounded-lg shadow-inner" onClick={() => setTask([])}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
