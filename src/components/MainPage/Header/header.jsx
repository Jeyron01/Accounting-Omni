import "./styleHeader.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className="headerContainer">
      <div className="company">
      <img src="assets/Nu Kenzie.png"/>
      <h3 className="omni">OMNITECH</h3>
      </div>
        <button className="btn" onClick={()=>navigate("/")}>
          Logout
        </button>
      </header>
    </>
  );
}
