import "./styleWelcomePage.css";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();
  return (
    <>
      <main className="HomePage">
        <aside>
          <div className="contents">
            <div className="companyLogo">
            <img
              className="logo"
              src="assets/Nu Kenzie.png"
              alt="Logo Nu Kenzie Branco"
            />
            <h2>OMNITECH</h2>
            </div>
            <h1>Welcome kaOMNIVERSE!</h1>
            <p className="text">Your problem, my solution!</p>
            <button className="button" onClick={()=>navigate("/main")}>
              Enter
            </button>
          </div>
        </aside>
      </main>
    </>
  );
}
