import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      navigate("/welcomePage");

    }

return (
      <div className="auth-form-container">
        <h2>LOGIN</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Username </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="username" placeholder="example yugyugmoko@#gmail.com" id="username" name="username"/>
        <label htmlFor="password">Password </label>
        <input value={pass} onChange={(e) => setPass (e.target.value)} type="password" placeholder="********" id="password" name="password"/>
        <button> Login </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
      </div>
       )
}

export default Login;