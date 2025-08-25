import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, onAuthStateChanged } from '../../firebase'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const value = { user }
  return !loading ? <AuthContext.Provider value={value}>{children}</AuthContext.Provider> : null
}

export const useAuth = () => useContext(AuthContext)
