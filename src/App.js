// import { useRef, useState } from "react";
import MyTodo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

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
      </BrowserRouter>
    </>
  );
}

function NavigationLinks() {
  return (
    <>
      <Link to={"/home"}> Home |</Link>
      <Link to={"/todo"}>Todo |</Link>
      <Link to={"/registration"}>Registration </Link>
    </>
  );
}

export default App;
