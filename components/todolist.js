import { useContext, useEffect } from "react";
import Storecontext from "./StoreContext";
import Todolistprint from "./TodolistPrint";

const Todolist = () => {

  const storectx = useContext(Storecontext);

  const newArray = storectx.AllTodo.map((current) => (
    
      <Todolistprint key={current.id} id={current.id} title={current.todo} date={current.date} item={current}></Todolistprint>
   
  ));
  return (
    <div>
      <h2>todolist</h2>

      {newArray}
    </div>
  );
};
export default Todolist;
