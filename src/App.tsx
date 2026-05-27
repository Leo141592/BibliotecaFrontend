import { Routes, Route } from "react-router-dom"

import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import BookDetailsPage from "./pages/BookDetailsPage"

function App() {

  return (

    <Routes>

      <Route path="/" element={<LoginPage />} />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

      <Route
        path="/home"
        element={<HomePage />}
      />

      <Route
        path="/books/:id"
        element={<BookDetailsPage />}
      />

    </Routes>

  )
}

export default App