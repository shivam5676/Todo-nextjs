import { useContext} from "react";
import Storecontext from "./StoreContext";

const Todolistprint = (props) => {
  const storectx = useContext(Storecontext);

  const completeTodoHandler = () => {
    
    fetch(
      `https://nextjs-todo-54be6-default-rtdb.firebaseio.com/today/completetodo.json`,
      {
        method: "POST",
        body: JSON.stringify(props.item),
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((response) => {
        console.log(response);
        fetch(
          `https://nextjs-todo-54be6-default-rtdb.firebaseio.com/today/pendingtodo/${props.id}.json`,
          {
            method: "DELETE",

            headers: { "content-type": "application/json" },
          }
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((response) => {
            storectx.completeTodo(props.item);
          });
      })
      .catch((err)=>{
        console.log(err)
      })
  };

  
  const deleteTodoHandler = () => {
    fetch(
      `https://nextjs-todo-54be6-default-rtdb.firebaseio.com/today/pendingtodo/${props.id}.json`,
      {
        method: "DELETE",

        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((response) => {
      storectx.removeTodo(props.id);
      });
    
  };

  console.log(storectx.Completed);
  return (
    <div>
      <input type="checkbox" onClick={completeTodoHandler}></input>
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <button onClick={deleteTodoHandler}>delete</button>
    </div>
  );
};
export default Todolistprint;
