import { InputForm } from "../elements/form"
import Button from "../elements/button"
export const FormRegister = () => {
    return(
        <form action="">
              <InputForm label="Email" placeholder="example@gmail.com" type="text" name="email"/>
              <InputForm label="Username" placeholder="Enter Your Username Here" type="text" name="username"/>
              <InputForm label="Password" placeholder="Enter Your password Here" type="password" name="password"/>
              <InputForm label="Confirm Password" placeholder="Confirm Your password Here" type="password" name="confirmpass"/>
              <Button  warna="bg-blue-700 w-full">Register</Button>
        </form>
    )
}