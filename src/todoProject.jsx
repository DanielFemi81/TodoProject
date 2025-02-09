import React, { useState, useEffect } from "react";
import Form from "./components/form";
import Header from "./components/header";
import TodoList from "./components/todoList";
import axios from "axios";

const TodoProject = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setTodo(res.data));
  }, []);
  // console.table(data);
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
      <Header />
      <Form
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        edit={edit}
        setEdit={setEdit}
        data={data}
        setData={setData}
      />
      <TodoList
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        edit={edit}
        setEdit={setEdit}
      />
    </div>
  );
};

export default TodoProject;
