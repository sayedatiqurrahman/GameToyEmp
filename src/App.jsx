import { Outlet } from "react-router-dom"
import Footer from "./Components/Shared/Footer"
import NavbarTop from "./Components/Shared/NavbarTop"
import { Toaster } from 'react-hot-toast';
function App() {


  return (
    <div className="myContainer">
      {/* Navbar */}
      <NavbarTop />
      {/* Outlet */}
      <div className="min-h-[calc(100vh-130px)]">
        <Outlet />
        {/* Toast */}
        <Toaster />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
