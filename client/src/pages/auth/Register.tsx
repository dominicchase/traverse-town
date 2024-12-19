import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  return (
    <>
      <p>Have an account?</p>
      <button onClick={() => navigate("/login")}>Login</button>
    </>
  );
}
