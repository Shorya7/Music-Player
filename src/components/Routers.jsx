import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import Login from "./Login";
import Home from "./Home";
function AppRouter() {
    return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
    </Routes>
    </Router>
    );
}
export default AppRouter;