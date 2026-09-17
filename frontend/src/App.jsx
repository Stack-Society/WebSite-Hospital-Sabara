import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./routes/Home"
import Error from "./routes/Error"
import Login from "./routes/Login"
import Registrar from "./routes/Registrar"
import Estatistica from "./routes/Estatistica"
import Contato from "./routes/Contato"
import "./index.css"

function App() {


  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registrar" element={<Registrar />} />
          <Route path="/Estatistica" element={<Estatistica />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
