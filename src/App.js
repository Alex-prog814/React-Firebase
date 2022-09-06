import React from 'react';
import Login from './components/Login';
import AuthContextProvider from './contexts/authContext';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>
    </>
  )
}

export default App;