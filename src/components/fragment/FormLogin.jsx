import { InputForm } from "../elements/form"
import Button from "../elements/button"
export const FormLogin = () => {
    return (
        <form action="">
              <InputForm label="Email" placeholder="example@gmail.com" type="text" name="email"/>
              <InputForm label="Password" placeholder="Enter Your password Here" type="password" name="password"/>
            <Button  warna="bg-blue-700 w-full"  text="Login"/>
        </form>
    )
}