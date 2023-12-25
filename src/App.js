import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />


        <Route path="/register" element={user ? <Home /> : <Register />} />
        {/* <Route path="/register">{user ? <Home /> : <Register />}</Route> */}
        <Route path="/login" element={user ? <Home /> : <Login />} />
        {/* <Route path="/login">{user ? <Home /> : <Login />}</Route> */}
        <Route path="/write" element={user ? <Write /> : <Register />} />
        {/* <Route path="/write">{user ? <Write /> : <Register />}</Route> */}
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        {/* <Route path="/settings">{user ? <Settings /> : <Register />}</Route> */}
        <Route path="/post/:postId" element={<Single />} />

      </Routes>
    </Router>
  );
}

export default App;
