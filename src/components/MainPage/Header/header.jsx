import "./styleHeader.css";

export default function Header({ setLogin }) {
  function backToWelcomePage() {
    setLogin(false);
  }
  return (
    <>
      <header className="headerContainer">
      <div className="company">
      <img src="assets/Nu Kenzie.png"/>
      <h3>OMNITECH</h3>
      </div>
        <button className="btn" onClick={() => backToWelcomePage()}>
          Logout
        </button>
      </header>
    </>
  );
}
