function App() {
  return (
    <>
      <h1>Props demo </h1>
      <MessegeDemo username="Ajay" />
    </>
  );
}

function MessegeDemo(Props) {
  return (
    <>
      <h1>Hello {Props.username}</h1>
    </>
  );
}
export default App;
