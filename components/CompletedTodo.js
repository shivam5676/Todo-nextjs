import { useContext } from "react";
import Storecontext from "./StoreContext";

const CompletedTodo = () => {
  console.log("reexecuted completedtodo component");
  const storectx = useContext(Storecontext);
  console.log(storectx.Completed)
  const completedArray = storectx.Completed.map((current) => (

    <div key={current.id}>
      <h2>{current.todo}</h2>
      <h6>{current.date}</h6>
    </div>
  ));
  return (
    <div>
      <h1>completed array</h1>
      {completedArray}
    </div>
  );
};

export default CompletedTodo;
