//CSS
import "./App.css";
//Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//Firebase
import { onAuthStateChanged } from "firebase/auth";
//Hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";
//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreatPost from "./pages/CreatPost/CreatPost";
import Dashboard from "./pages/Dashboard/Dashboard";
//context
import { AuthProvider } from "./context/AuthContext";
//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(()=>{

    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    });
    console.log(loadingUser)
    console.log(user)
  },[auth]);


  if (loadingUser) {
    return <Loading/>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/"/>} />
              <Route path="/posts/create" element={user ? <CreatPost /> : <Navigate to="/login"/>} />
              <Route path="/dashboard" element={!user ? <Dashboard/> : <Navigate to="/login"/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
