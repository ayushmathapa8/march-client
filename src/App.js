import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRegistration, { LoginPage } from "./login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<AdminRegistration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
