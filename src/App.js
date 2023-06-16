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
  let [todo, setTodo] = useState({ task: "", description: "" });

  let handleChangeTaskAction = (e) => {
    // console.log(e.target);
    //e.targt===input object
    let newTodo = { ...todo, task: e.target.value };
    setTodo(newTodo);
  };

  let handleChageDescription = (e) => {
    // console.log(e.target);
    let newTodo = { ...todo, description: e.target.value };
    setTodo(newTodo);
  };

  let addTodoAction = () => {
    alert(todo.task + "" + todo.description);
  };

  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Enter todo"
        value={todo.task}
        onChange={handleChangeTaskAction}
      />

      <textarea
        className="form-control"
        cols="30"
        placeholder="Enter description"
        rows="3"
        value={todo.description}
        onChange={handleChageDescription}
      ></textarea>
      <input type="button" value="Add Todo" onClick={addTodoAction} />
    </>
  );
}
export default App;
