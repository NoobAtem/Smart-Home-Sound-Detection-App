import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninComponent from "./Signin_Form"
import SignupComponent from "./Signup_Form";
import Timelog from "./timelog";
import SetNotification from "./SetNotification";
import ManageDevice from "./ManageDevice";
import Recovery from "./components/OTP/Recovery";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signin_Form" element={<SigninComponent/>}/>
        <Route path="/Signup_Form" element={<SignupComponent/>}/>
        <Route path="/Recovery" element={<Recovery/>}/>
        <Route path="/user/ManageDevice" element={<ManageDevice/>}/>
        <Route path="/user/Timelog" element={<Timelog/>}/>
        <Route path="/user/SetNotification" element={<SetNotification/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
