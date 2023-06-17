import { useNavigate } from "react-router-dom";

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
export default NavButton;
