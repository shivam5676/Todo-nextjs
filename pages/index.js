import styles from "../styles/Home.module.css";
import Todolist from "../components/todolist";
import AddTodo from "../components/AddTodo";
import CompletedTodo from "../components/completedTodo";
import { useContext, useEffect } from "react";
import Storecontext from "../components/StoreContext";
export default function Home() {
  const storectx = useContext(Storecontext);
  useEffect(() => {
    const fetchdata = async () => {
      //fetching completed todo data
      const res = await fetch(
        `https://nextjs-todo-54be6-default-rtdb.firebaseio.com/today/completetodo.json`,
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      );

      const response = await res.json();
      response&& Object.values(response).map((current) => {
        storectx.completeTodo(current);
      });
//fetching pending todo data
      const resp = await fetch(
        `https://nextjs-todo-54be6-default-rtdb.firebaseio.com/today/pendingtodo.json`,
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      );

      const respo = await resp.json();
      respo&& Object.values(respo).map((current) => {
        storectx.addTodo(current);
      });
    };
    fetchdata();
  }, []);
  return (
    <div className={styles.container}>
      <h3>hello shivam</h3>
      <Todolist></Todolist>
      <AddTodo></AddTodo>
      <CompletedTodo></CompletedTodo>
    </div>
  );
}
