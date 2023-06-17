import { Link } from "react-router-dom";
function NavigationLinks() {
  return (
    <>
      <Link to={"/home"}> Home |</Link>
      <Link to={"/todo"}>Todo |</Link>
      <Link to={"/registration"}>Registration </Link>
      <Link to={"/mytodolist"}>MyTodoList </Link>
    </>
  );
}
export default NavigationLinks;
