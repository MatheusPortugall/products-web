import Header from "./components/Header"
import ProductDetail from "./pages/ProductDetail"
import ProductList from "./pages/ProductList"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={null} />
        <Route path="/items" element={<ProductList />} />
        <Route path="/items/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
