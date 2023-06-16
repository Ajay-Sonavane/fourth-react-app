function App() {
  return (
    <>
      <h1>Props demo </h1>
      {/* calling the messege */}
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let data = "Hello Universe";
  let list = ["delhi", "calcutta", "chennai"];
  //

  return (
    <>
      <h1>{data}</h1>
      {/* {list.map((item) => item)}  version 1*/}
      {list.map((item) => (
        <h1>Hello{item}</h1>
      ))}
    </>
  );
}

// function MessegeDemo(Props) {
//   return (
//     <>
//       <h1>Hello {(Props.name, Props.email)}</h1>
//     </>
//   );
// }
export default App;
