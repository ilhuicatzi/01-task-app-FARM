import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TaskForm from "./pages/TaskForm"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto px-10 py-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/:id" element={<TaskForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App