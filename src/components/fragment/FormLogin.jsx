import { InputForm } from "../elements/form"
import Button from "../elements/button"
import { useEffect, useRef } from "react"
export const FormLogin = () => {

    // penggunaan useRef pada login
    const emailRef = useRef(null)

    useEffect(() => {
        emailRef.current.focus()
    })

    // event handler
    const HandleLogin = (event) => {
        event.preventDefault()

        localStorage.setItem("email", event.target.email.value)
        localStorage.setItem("password", event.target.password.value)
        window.location.href = '/product'
    }

    return (
        <form action="" onSubmit={HandleLogin}>
              <InputForm label="Email" placeholder="example@gmail.com" type="text" name="email" ref={emailRef}/>
              <InputForm label="Password" placeholder="Enter Your password Here" type="password" name="password"/>
            <Button  warna="bg-blue-700 w-full" type="submit">Login</Button>
        </form>
    )
}