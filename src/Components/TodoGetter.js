import React, { useState } from "react";

const TodoGetter = (props) => {
  const setTask = props.setTask;
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "")
        return;
    setTask((prevState) => [...prevState, inputValue]);
    setInputValue("");
  };

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="w-full">
      <form className="relative w-full" onSubmit={handleSubmit}>
        <input
          className="relative w-full outline-none font-sans text-lg font-semibold rounded-l-lg tracking-wider p-3 shadow-2xl placeholder:italic"
          type="text"
          placeholder="enter your things..."
          value={inputValue}
          onChange={handleInputValue}
        />
        <button
          className="absolute top-0 right-0 font-sans text-lg font-semibold tracking-wider p-3 bg-[#2C2C2C] text-white rounded-l-lg border border-slate-600 shadow-lg"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoGetter;
