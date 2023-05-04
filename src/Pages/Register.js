import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Okay na beshi pasok na");
}

  return (
    <div className="auth-form-container">
      <h2>REGISTER</h2>
      <form className="register-form"  onSubmit={handleSubmit}>
          <label htmlFor="email">Full Name </label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Enter Full Name" id="name" name="name" />
          <label htmlFor="email">Username</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="username" placeholder="example yugyugmoko@#gmail.com" id="username" name="username"/>
          <label htmlFor="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
          <button> Submit </button>
      </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  )
}