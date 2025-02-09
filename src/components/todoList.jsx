import React from "react";

const TodoList = ({ todo, setTodo, setEdit }) => {
  const deleteBtn = ({ id }) => {
    setTodo(
      todo.filter((rmTodos) => {
        return rmTodos.id !== id;
      })
    );
  };
  const editBtn = (value) => {
    setEdit(value);
    // console.log(edit);
  };

  const clickedTodo = (todos) => {
    setTodo(
      todo.map((list) => {
        if (list.id === todos.id) {
          return { ...list, completed: !list.completed };
        }
        return list;
      })
    );
  };
  console.table(todo);

  return (
    <>
      {todo.map((todos) => {
        return (
          <li
            key={todos.id}
            style={{
              listStyle: "none",
              width: "300px",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <input
              type="text"
              value={todos.title}
              onChange={(e) => e.preventDefault()}
              style={{ padding: "8px", border: "0px" }}
            />
            <button
              onClick={() => editBtn(todos)}
              style={{
                padding: "6px",
                backgroundColor: "transparent",
                borderRadius: "5px",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => deleteBtn(todos)}
              style={{
                padding: "6px",
                backgroundColor: "transparent",
                borderRadius: "5px",
              }}
            >
              Del
            </button>
            <input
              type="checkbox"
              checked={todos.completed}
              onClick={() => clickedTodo(todos)}
              style={{ cursor: "pointer" }}
            />
          </li>
        );
      })}
    </>
  );
};

export default TodoList;
