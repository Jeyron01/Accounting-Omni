import "./App.css";
import { useState } from "react";
import AuthPage from "./components/AuthPage/Auth";
import MainPage from "./components/MainPage/mainPage";

function App() {
  const [Login, setLogin] = useState(false);
  return (
    <div className="container">
      <div>
        {Login ? (
          <MainPage setLogin={setLogin} />
        ) : (
          <AuthPage setLogin={setLogin} />
        )}
      </div>
    </div>
  );
}

export default App;