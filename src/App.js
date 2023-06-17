// import { useRef, useState } from "react";
import MyTodo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
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

export default App;
