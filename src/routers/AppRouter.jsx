import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginScreen from '../views/login/LoginScreen'
import SingUpScreen from '../views/singup/SingUpScreen'
import DashBoardRoutes from './DashBoardRoutes'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/login' element={<LoginScreen />} />
          <Route path="/singup" element={<SingUpScreen />} />
          <Route path='/*' element={<DashBoardRoutes />} />
        </Routes>
      </div>
    </Router>
  )
}

export default AppRouter
