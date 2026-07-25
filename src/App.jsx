import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import WatchLater from './pages/WatchLater'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
    <Route
      path="/movies/:id"
      element={
        <ProtectedRoute>
          <MovieDetails />
        </ProtectedRoute>
      }
    />
    <Route
      path="/watch-later"
      element={
        <ProtectedRoute>
          <WatchLater />
        </ProtectedRoute>
      }
    />
    <Route path="/not-found" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/not-found" replace />} />
  </Routes>
)

export default App