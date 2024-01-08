import { FormLogin } from "../fragment/FormLogin"
import { Link } from "react-router-dom"

// Conditional Rendering
export const AuthLayout = ({children, text, type}) => {
    return (
        <div className="  flex justify-center min-h-screen  bg-slate-700 items-center">
        <div className="w-full rounded-md max-w-xs p-3 bg-white">
            <h1 className=" font-bold text-blue-500 text-3xl ">{text}</h1>
            <p className=" fs-6 mt-2">Welcome, Enter Your name</p>
            {children}

            <p
            className="fs-6 mt-2 text-center">
                {type === "login" ? "Dont have an account? " : "Have an account? "}
            <Link 
            to={type === "login" ? "/register" : "/"} className="text-blue-500 underline underline-offset-4 font-bold ">
                {type === "login" ? "Sign up" : "Login"}
            </Link>
            </p>
          </div>
          </div>
    )
}