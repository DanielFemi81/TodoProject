import React, { useState, useEffect, createContext } from "react";
import Form from "./components/form";
import Header from "./components/header";
import TodoList from "./components/todoList";
import axios from "axios";

export const GlobalState = createContext(null);
const TodoProject = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setTodo(res.data));
  }, []);
  return (
    <div
      style={{
        // border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
        margin: "20px auto",
        padding: "10px",
        fontFamily: "sans-serif",
        fontSize: "20px",
      }}
    >
      <GlobalState.Provider
        value={{ input, setInput, todo, setTodo, edit, setEdit, data, setData }}
      >
        {todo.length == 0 ? (
          <p>Loading</p>
        ) : (
          <>
            <Header />
            <Form />
            <TodoList />
          </>
        )}
      </GlobalState.Provider>
    </div>
  );
};

export default TodoProject;
