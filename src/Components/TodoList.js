import React, { useState } from "react";
import { AiFillDelete, AiFillEdit} from "react-icons/ai";
import { FiSave } from "react-icons/fi";


const TodoList = (props) => {
  const task = props.task;
  const setTask = props.setTask;
  const [isEditable, setIsEditable] = useState(-1);
  const [editValue, setEditValue] = useState("");

  const removeTodoItem = (itemToBeDeleted) => {
    const newTask = task.filter((data) => {
      return data !== itemToBeDeleted;
    });
    setTask(newTask);
  };

  const editTodoItem = (itemEditable, index) => {
    setIsEditable(index);
    setEditValue(itemEditable);
  };
  const handleEditablePara = (event) => {
    setEditValue(event.target.value);
  };
  const handleEditableSubmit = () => {
    const newTask = [...task];
    if (editValue === "") newTask.splice(isEditable, 1);
    else newTask[isEditable] = editValue;
    setTask(newTask);
    setIsEditable(-1);
  };

  return (
    <div className="w-full flex flex-col gap-2 px-2">
      {task.map((item, index) => {
        return (
          <div className="flex w-full gap-2 justify-around p-2 bg-[#1E1E1E] rounded-lg">
            {isEditable === index ? (
              <form
                className=" flex items-center gap-4 grow"
                onSubmit={handleEditableSubmit}
              >
                <input
                  className="bg-transparent min-w-max outline outline-offset-4 h-full font-sans text-base text-white font-medium"
                  type="text"
                  value={editValue}
                  onChange={handleEditablePara}
                />
                <button>
                  <FiSave style={{ fontSize: "1.75rem", color: "white" }} />
                </button>
              </form>
            ) : (
              <p className="font-sans w-11/12 text-base text-white font-medium break-words">
                {item}
              </p>
            )}

            <div className="space-x-3 w-1/6 flex justify-center items-center">
              <button onClick={() => removeTodoItem(item)}>
                <AiFillDelete style={{ fontSize: "1.75rem", color: "white" }} />
              </button>
              <button onClick={() => editTodoItem(item, index)}>
                <AiFillEdit style={{ fontSize: "1.75rem", color: "white" }} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
