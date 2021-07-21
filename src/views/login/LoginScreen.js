import React from 'react'

const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.replace('/')
  }
  
  return (
    <section>
      <article>
        <div>
          <h1>Login</h1>
          <button
              onClick={ handleLogin }
          >
            Login
          </button>
        </div>
      </article>
    </section>
  )
}

export default LoginScreen
