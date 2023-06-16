import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1 className="justify-content-center">My project</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let inputRef = useRef();
  let [list, setList] = useState(["delhi"]);

  let addItemAction = () => {
    let inputValue = inputRef.current.value;
    let newList = [inputValue, ...list];
    setList(newList);

    inputRef.current.value = "";
  };

  return (
    <>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-sm-12 col-md-6">
          <h1>Register App</h1>
          <input
            className="form-control"
            type="text"
            id="id1"
            ref={inputRef}
            placeholder="Enter user input..."
          />

          <input
            className="form-control"
            type="password"
            id="id1"
            ref={inputRef}
            placeholder="Enter password"
          />
          <input
            className="form-control"
            type="email"
            id="id1"
            ref={inputRef}
            placeholder="Enter email..."
          />
          <input type="button" value="Register" onClick={addItemAction} />
        </div>
      </div>
    </>
  );
}

function MessageDemo({ message }) {
  return (
    <>
      <h1>Hello {message}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        dolorem quas sequi tenetur quo odit cupiditate assumenda voluptas
        quibusdam blanditiis voluptatem quis mollitia eaque molestiae animi,
        provident eligendi facilis incidunt.
      </p>
      <div>
        <input type="button" value="&#128077;" />
        <input type="button" value="&#128078;" />
      </div>
    </>
  );
}

export default App;

// import { useRef, useState } from "react";

// function App() {
//   return (
//     <>
//       <h1>Stateful List</h1>
//       <ListDemo />
//     </>
//   );
// }

// function ListDemo() {
//   let inputRef = useRef();

//   let [list, setList] = useState(["delhi"]);

//   // C2: Acton Member Funcn
//   let addItemAction = () => {
//     //Restricted we cannot use this ..  this is not recommended
//     let inputValue = inputRef.current.value;
//     let newList = [...list, inputValue];
//     inputRef.current.value = "";
//     // DOM :: TRIGGER DOM
//     setList(newList);
//   };

//   return (
//     <>
//       {/** C3: Event Binding */}
//       <input type="text" ref={inputRef} placeholder="Whatapp here..." />
//       <input type="button" value="Add Messege" onClick={addItemAction} />

//       {/** C4: List */}

//       {list.map((item) => (
//         <messegeDemo messege={item} />
//       ))}
//     </>
//   );
// }
// function messegeDemo({ messege }) {
//   return (
//     <>
//       <div>
//         <h1> {messege}</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
//           tempore nesciunt perferendis vel, aspernatur consequatur enim corrupti
//           fuga laudantium nisi officiis, sit sed ipsum pariatur possimus
//           maiores, ab ex! Tempore explicabo nisi architecto provident
//           dignissimos adipisci id amet vel, minima dolore iste, aspernatur
//           assumenda rerum possimus labore culpa eaque perspiciatis!
//         </p>
//       </div>
//     </>
//   );
// }

// export default App;
