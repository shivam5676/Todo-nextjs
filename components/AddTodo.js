import { useContext, useRef, useState } from "react";
import Storecontext from "./StoreContext";

const AddTodo = () => {
  const storectx = useContext(Storecontext);
  const dateref = useRef();
  const nameref = useRef();
  const saveTodoHandler = (event) => {
    event.preventDefault();
    const myobj = {
      id: Math.random(),
      todo: nameref.current.value,
      date: dateref.current.value,
    };
    storectx.addTodo(myobj);
  };
  return (
    <form>
      <input placeholder="todo name" ref={nameref}></input>
      <input placeholder="todo date" ref={dateref}></input>
      <button onClick={saveTodoHandler}>Add Todo</button>
    </form>
  );
};
export default AddTodo;
