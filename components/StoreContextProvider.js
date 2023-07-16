import { useReducer } from "react";
import Storecontext from "./StoreContext";
const reducerFn = (state, action) => {
  if (action.type === "add") {
    const newTodos = [...state.allItems, action.payload];
    const updatedState = {
      allItems: newTodos,
      completeItems: state.completeItems,
    };
    return updatedState;
  }
  if (action.type === "complete") {
    const excludeTodos = state.allItems.filter(
      (current) => current.id !== action.payload.id
    );
    const completeTodo = [...state.completeItems, action.payload];
    const updatedState = {
      allItems: excludeTodos,
      completeItems: completeTodo,
    };
    return updatedState;
  }
  if(action.type==="remove"){
    const excludeTodos = state.allItems.filter(
      (current) => current.id !== action.payload
    );
    const updatedState = {
      allItems: excludeTodos,
      completeItems: state.completeItems,
    };
    return updatedState;
  }

  return state;
};
const initialState = { allItems: [], completeItems: [] };

const StoreContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  const addItemHandler = (data) => {
    console.log("context executed");
    dispatch({
      type: "add",
      payload: data,
    });
  };
  const completeItemHandler = (item) => {
    dispatch({ type: "complete", payload: item });
  };
  const removeTodoHandler=(id)=>{
    dispatch({type:"remove",payload:id})
  }
  const contextHelper = {
    addTodo: addItemHandler,
    completeTodo: completeItemHandler,
    removeTodo:removeTodoHandler,
    AllTodo: state.allItems,
    Completed:state.completeItems
  };
  console.log(state);
  return (
    <Storecontext.Provider value={contextHelper}>
      {props.children}
    </Storecontext.Provider>
  );
};
export default StoreContextProvider;
