import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { auth, provider, signInWithPopup } from '../../firebase.jsx'
import "./Login.css"

const Login = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/')
  }, [user, navigate])

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider)
      navigate('/')
    } catch (e) {
      console.error('Login error:', e)
      alert('Login failed. Check console for details.')
    }
  }

  return (
    <div className="login-container">
      <div className="login-frame">
        <h1 className="login-title">Login to continue</h1>
        <p className="login-subtitle">Use your Google account</p>
        <button className="google-login-btn" onClick={handleLogin}>
          <svg className="google-icon" width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M44.5 20H24v8.5h11.8C34.9 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.2 0 6.2 1.2 8.5 3.2l6-6C34.7 4.5 29.6 2.5 24 2.5 12.1 2.5 2.5 12.1 2.5 24S12.1 45.5 24 45.5 45.5 35.9 45.5 24c0-1.4-.1-2.7-.4-4z" fill="#FFC107"/>
            <path d="M6.3 14.7l7 5.1C15.2 16 19.2 13.5 24 13.5c3.2 0 6.2 1.2 8.5 3.2l6-6C34.7 6.5 29.6 4.5 24 4.5c-7.7 0-14.3 4.3-17.7 10.2z" fill="#FF3D00"/>
            <path d="M24 43.5c5.9 0 10.9-2 14.7-5.4l-6.8-5.6c-2 1.4-4.6 2.2-7.9 2.2-6.1 0-10.9-3.9-12.7-9.2l-7 5.4C7.8 37.9 15.2 43.5 24 43.5z" fill="#4CAF50"/>
            <path d="M44.5 20H24v8.5h11.8c-.6 3-2.3 5.6-4.7 7.4l.1.1 6.8 5.6c-.5.5 6.5-4.8 6.5-17.6 0-1.4-.1-2.7-.4-4z" fill="#1976D2"/>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default Login
