import { useState } from "react";
import { Login } from "../Components/Login";
import Signup from "../Components/Signup";


export function AuthPage() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div>
            {isLogin ? (
                <Login onSwitchToSignUp = {() => setIsLogin(false)} />
            ) : (
                <Signup  onSwitchToLogin = {() => setIsLogin(true)} />
            )}
        </div>
    )
}