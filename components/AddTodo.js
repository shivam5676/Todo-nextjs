import { useContext, useRef, useState } from "react";
import Storecontext from "./StoreContext";

const AddTodo = () => {
  const storectx = useContext(Storecontext);
  const dateref = useRef();
  const nameref = useRef();
  const saveTodoHandler = (event) => {
    event.preventDefault();
    const myobj = {
      
      todo: nameref.current.value,
      date: dateref.current.value,
    };
    fetch(
      "https://nextjs-todo-54be6-default-rtdb.firebaseio.com/today/pendingtodo.json",
      {
        method: "POST",
        body: JSON.stringify(myobj),
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((response) => {
        fetch(
          `https://nextjs-todo-54be6-default-rtdb.firebaseio.com/today/pendingtodo/${response.name}.json`,
          {
            method: "PUT",
            body: JSON.stringify({ ...myobj, id: response.name }),
            headers: { "content-type": "application/json" },
          }
        ).then((res) => {
          if (res.ok) {
            return res.json();
          }
        }).then((response)=>{
          storectx.addTodo(response);
        })
      })
      .catch((err) => {
        console.log(err);
      });
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
