import { InputForm } from "../elements/form"
import Button from "../elements/button"
import { useState, useEffect, useRef } from "react"
import { login } from "../../services/auth.service"
export const FormLogin = () => {

    // informasi login failed
    const [loginFailed, setLoginFailed] = useState("")
    // penggunaan useRef pada login
    const usernameRef = useRef(null)

    useEffect(() => {
        usernameRef.current.focus()
    })

    // event handler
    const HandleLogin = (event) => {
        event.preventDefault()
        // localStorage.setItem("email", event.target.email.value)
        // localStorage.setItem("password", event.target.password.value)
        // window.location.href = '/product'
        
        // sekarang pada eps 17 kita menggunakan API untuk login (auth.service.jsx)
        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        login(data, (status, res) => {
            if(status) {
                localStorage.setItem("token", res)
                window.location.href = '/product'
            } else{
                setLoginFailed(res.response.data)
                console.log(res.response.data);
            }
        })
    }

    return (
        <form action="" onSubmit={HandleLogin}>
            {loginFailed && <p className="text-red-500">{loginFailed}</p>}
              <InputForm label="Username" placeholder="Jhon Doe" type="text" name="username" ref={usernameRef}/>
              <InputForm label="Password" placeholder="Enter Your password Here" type="password" name="password"/>
            <Button  warna="bg-blue-700 w-full" type="submit">Login</Button>
        </form>
    )
}