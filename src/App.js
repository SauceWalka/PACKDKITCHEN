import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import ProductPage from "./pages/ProductPage"
import { Route, Routes } from "react-router-dom"

function App() {
  return <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/About" element= {<About />} />
        <Route path="/ProductPage" element= {<ProductPage />} />
      </Routes>
    </div>
  </>
}

export default App;
