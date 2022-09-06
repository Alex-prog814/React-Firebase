import React, { useContext } from 'react';
import { authContext } from '../contexts/authContext';

const Login = () => {
  const { email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError, handleLogout, user } = useContext(authContext);

  return (
    <div>
      <h2>You already have an account?</h2>
      <button onClick={() => setHasAccount(true)}>Yes, sign in</button>
      <button onClick={() => setHasAccount(false)}>No, sign up</button>

      {emailError}<br />
      {passwordError}<br />
      {user.email}<br />

      <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>

      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : null}

      {hasAccount ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleSignUp}>Register</button>
      )}
    </div>
  )
}

export default Login