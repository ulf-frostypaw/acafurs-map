import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error404Page from './pages/Error404'
import LoginPage from './pages/auth/Login'
import Register from './pages/auth/Register'
import Users from './pages/users/Users'
import ProtectedRoute from './pages/ProtectedRoute'
import Dashboard from './pages/dashboard/Dashboard'
import RecoveryPassword from './pages/auth/RecoveryPassword'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/users' element={<Users />} />
        
        <Route path='/' element={<ProtectedRoute />}>
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Route>

        <Route exact path='/about' element={<About />} />

        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/recovery-password' element={<RecoveryPassword />} />

        <Route path='*' element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
