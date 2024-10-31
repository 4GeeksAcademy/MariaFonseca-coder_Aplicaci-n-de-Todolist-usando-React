import React, { useState } from "react";

const Home = () => {
  const [InputText, setInput] = useState("");
  const [ToDo, setToDo] = useState([]);

  function sendData(event) {
    event.preventDefault();
    if (InputText.trim() !== "") { // Asegura que no se agreguen tareas vacías
      setToDo([...ToDo, InputText]); // Agrega la nueva tarea
      setInput(""); // Limpia el input
    }
  }

  const deleteTask = (index) => {
    const newToDo = ToDo.filter((_, i) => i !== index); // Elimina la tarea
    setToDo(newToDo);
  };

  return (
    <form onSubmit={sendData}>
      <div className="container text-center">
        <h1>todos</h1>
        <div className="Lista text-center">
          <ul className="list-group">
            {ToDo.length === 0 ? ( // Muestra un mensaje si no hay tareas
              <li className="list-group-item">
                No hay tareas, añadir tareas
              </li>
            ) : (
              ToDo.map((task, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{task}</span>
                  <button
                    className="btn border-0 text-muted bg-white delete-button"
                    onClick={() => deleteTask(index)}
                  >
                    <i className="fa-regular fa-circle-xmark"></i>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
        <input
          type="text"
          value={InputText}
          placeholder="What needs to be done?"
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
    </form>
  );
};

export default Home;
