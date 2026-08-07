import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const LoginScreen = lazy(() => import('../views/login/LoginScreen'))
const SingUpScreen = lazy(() => import('../views/singup/SingUpScreen'))
const DashBoardRoutes = lazy(() => import('./DashBoardRoutes'))

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Suspense fallback={<div className="route-loading" role="status" aria-label="Cargando contenido" />}>
          <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path="/singup" element={<SingUpScreen />} />
            <Route path='/*' element={<DashBoardRoutes />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default AppRouter
