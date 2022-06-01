import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import SubscriptionPlan from "./SubscriptionPlan";
import Subscriptions from "./Subscriptions";
import Home from "./Home";

import UserContext from "../context/UserContext";

import "../CSS/reset.css";

function App() {

    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} ></Route>
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/subscriptions" element={<Subscriptions />}></Route>
                    <Route path="/subscriptions/:id_plan" element={<SubscriptionPlan />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App