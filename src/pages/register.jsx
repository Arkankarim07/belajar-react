import { AuthLayout } from "../components/layout/AuthLayout"
import { FormLogin } from "../components/fragment/FormLogin"
import { FormRegister } from "../components/fragment/FormRegister"
import { Link } from "react-router-dom"
export const RegisterPage = () => {
    return (
        <AuthLayout text="Register" type="register">
            <FormRegister />
        </AuthLayout>
    )
}