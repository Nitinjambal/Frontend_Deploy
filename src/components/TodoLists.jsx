import React from "react";

function TodoLists({
  title,
  description,
  isCompleted,
  updateHandler,
  deleteHandler,
  id,
}) {
  return (
    <div className="todo">
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>

      <div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => updateHandler(id)}
        />
        <button onClick={() => deleteHandler(id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoLists;
