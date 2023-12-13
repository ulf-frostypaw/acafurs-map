import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './auth/AuthProvider'
function ProtectedRoute() {
    const auth = useAuth()
    return auth.isAuth ? <Outlet /> : <Navigate to={"/login"} />
}

export default ProtectedRoute