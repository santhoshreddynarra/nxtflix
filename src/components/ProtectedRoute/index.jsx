import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get('jwt_token')

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return children ? children : <Outlet />
}

export default ProtectedRoute
