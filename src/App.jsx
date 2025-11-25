import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home"
import NotFoundPage from "./notfound"

function App () {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App