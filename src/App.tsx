import "./App.css";
import Background from "./components/Homepage/BackgroundSwipe/Background";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route index element={<Background />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Background />} />
    </Routes>
  );
}

export default App;
