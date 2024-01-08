import { AuthLayout } from "../components/layout/AuthLayout"
import { FormLogin } from "../components/fragment/FormLogin"
import { Link } from "react-router-dom"
export const LoginPage = () => {
    return (
        <>
        <AuthLayout text="Login" type="login">
        <FormLogin />
        </AuthLayout>
        </>
    )
}