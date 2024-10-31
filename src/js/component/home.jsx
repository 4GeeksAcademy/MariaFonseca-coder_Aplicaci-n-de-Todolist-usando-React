import React, { useState } from "react";

const Home = () => {
  const [inputText, setInput] = useState("");
  const [toDo, setToDo] = useState([]);

  function sendData(event) {
    event.preventDefault();
    if (inputText.trim() !== "") {
      setToDo([...toDo, inputText.trim()]);
      setInput("");
    }
  }

  function handleDelete(index) {
    const updatedToDo = toDo.filter((_, i) => i !== index);
    setToDo(updatedToDo);
  }

  return (
    <form onSubmit={sendData}>
      <div className="container text-center">
        <h1>To Do List</h1>
        <li><input type="text" className="InputCSS" placeholder="What needs to be done?" value={inputText} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => {
          if (event.key === "Enter") {
            sendData(event);
          }
        }} /></li>
        <div className="Lista text-center">
          <ul className="list-group">
            {toDo.length === 0 ? (
              <li className="list-group-item">No hay tareas, añadir tareas</li>
            ) : (
              toDo.map((task, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {task}
                  <button
                    type="button"
                    className="btn border-0 text-muted bg-white delete-button"
                    onClick={() => handleDelete(index)}
                  >
                    <i className="fa-regular fa-circle-xmark"></i>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </form>
  );
};

export default Home;
