import React, { useEffect, useContext } from "react";
import { v4 as ID } from "uuid";
import { GlobalState } from "../todoProject";

const Form = () => {
  const { input, setInput, todo, setTodo, edit, setEdit } =
    useContext(GlobalState);
  const updateTodo = (title, id, completed) => {
    const newTodo = todo.map((todos) => {
      return todos.id === id ? { title, id, completed } : todos;
    });
    setTodo(newTodo);
    setEdit("");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(edit).length === 0) {
      setTodo([...todo, { title: input, id: ID(), completed: false }]);
      setInput("");
    } else {
      updateTodo(input, edit.id, edit.completed);
    }
  };
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (edit.title) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [edit, setInput]);

  return (
    <>
      <form
        onSubmit={onFormSubmit}
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "50px",
        }}
      >
        {console.log(input)}

        <input
          type="text"
          value={input}
          onChange={onInputChange}
          //   onChange={(e) => setInput(e.target.value)}
          placeholder="input task for the day..."
          required
          style={{
            width: "200px",
            padding: "8px",
            border: "none",
            borderBottom: "1px solid black",
            borderRadius: "0px",
          }}
        />

        <button
          type="submit"
          style={{
            borderRadius: "5px",
            backgroundColor: "blue",
            color: "white",
            cursor: "pointer",
            border: "none",
          }}
        >
          {edit ? "OK" : "Add"}
        </button>
      </form>
    </>
  );
};

export default Form;
