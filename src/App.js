// import { useRef, useState } from "react";
import MyTodo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";
import NavigationLinks from "./pages/NavigationLinks";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationLinks />
        <Routes>
          <Route path="/" element={<h1>Hello world</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/todo" element={<MyTodo />} />
          <Route path="/registration" element={<MyRegistration />} />
        </Routes>
        <NavButton />
      </BrowserRouter>
    </>
  );
}

function NavButton() {
  const navigate = useNavigate();
  let HomeAction = () => {
    navigate("/home");
  };
  let TodoAction = () => {
    navigate("/todo");
  };
  let RegistrationAction = () => {
    navigate("/registration");
  };
  return (
    <>
      <input type="button" value="Home" onClick={HomeAction} />
      <input type="button" value="Todo" onClick={TodoAction} />
      <input type="button" value="Registration" onClick={RegistrationAction} />
    </>
  );
}
export default App;
