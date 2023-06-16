import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>My Todo</h1>
      <MyTodo />
    </>
  );
}

function MyTodo() {
  //let todo = { task: "" };
  //step:1:: Form :: multiple input Field
  let [todo, setTodo] = useState({ task: "" });

  // step::3
  let handleChangeTaskAction = (e) => {
    // console.log(e.target);
    //e.targt===input object
    let newTodo = { ...todo, task: e.target.value };
    setTodo(newTodo);
  };

  // s4:: we will making API call
  let addTodoAction = () => {
    alert(todo.task);
  };

  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Enter todo"
        // step:2
        value={todo.task}
        onChange={handleChangeTaskAction}
      />
      <input type="button" value="Add Todo" onClick={addTodoAction} />
    </>
  );
}
export default App;
