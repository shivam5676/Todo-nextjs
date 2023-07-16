import { useContext } from "react";
import Storecontext from "./StoreContext";

const Todolistprint=(props)=>{
    const storectx=useContext(Storecontext)
    const completeTodoHandler=()=>{
       storectx.completeTodo(props.item)
      }
      const deleteTodoHandler=()=>{
        storectx.removeTodo(props.id)
      }
return(
<div>
    <input type="checkbox" onClick={completeTodoHandler}></input>
    <h2>{props.title}</h2>
    <h3>{props.date}</h3>
    <button onClick={deleteTodoHandler}>delete</button>
</div>
)
}
export default Todolistprint;