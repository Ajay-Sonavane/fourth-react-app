import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>Stateful List</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let inputRef = useRef();

  let [list, setList] = useState(["delhi"]);

  // C2: Acton Member Funcn
  let addItemAction = () => {
    //Restricted we cannot use this ..  this is not recommended
    let inputValue = inputRef.current.value;
    let newList = [...list, inputValue];
    inputRef.current.value = "";
    // DOM :: TRIGGER DOM
    setList(newList);
  };

  return (
    <>
      {/** C3: Event Binding */}
      <input type="text" ref={inputRef} placeholder="Whatapp here..." />
      <input type="button" value="Add Messege" onClick={addItemAction} />

      {/** C4: List */}
      {list.map((item) => (
        <h1> {item}</h1>
      ))}
    </>
  );
}

export default App;
