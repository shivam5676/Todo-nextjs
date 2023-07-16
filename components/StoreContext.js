import { createContext, useContext } from "react";

const Storecontext = createContext({
  AllTodo: [],
  Completed: [],
  addTodo: () => {},
  completeTodo:()=>{},
  removeTodo:()=>{}
});
export default Storecontext;
