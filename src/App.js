function App() {
  return (
    <>
      <h1>Props demo </h1>
      {/* calling the messege */}
      <MessegeDemo name="Ajay" email="Ajay@gmail.com" />
    </>
  );
}

function MessegeDemo({ name, email }) {
  return (
    <>
      <h1>
        Hello {name} {email}
      </h1>
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
