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
  // for (let i = 0; i < 10; i++) {
  //   list.push("hello Universe");
  // }
  return (
    <>
      <h1>{data}</h1>
      {list.map((item) => item)}
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
