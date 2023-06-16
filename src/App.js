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
  let list = ["", "", ""];
  let list1 = [];
  for (let i = 0; i < 100; i++) {
    list1.push("");
  }
  //

  return (
    <>
      {list.map((item) => (
        <div>
          <h1>Hello world</h1>
        </div>
      ))}

      {list1.map((item) => (
        <div>
          <h1>Hello Universe</h1>
        </div>
      ))}
    </>
  );
}

export default App;
