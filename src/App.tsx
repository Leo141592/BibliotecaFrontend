import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

<Routes>
  <Route path="/" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/home" element={<HomePage />} />
</Routes>

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App