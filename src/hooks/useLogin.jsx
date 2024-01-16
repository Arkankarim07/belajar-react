import { useState, useEffect } from "react"
import { getUsername } from "../services/auth.service"

export const useLogin = () => {
    const [username, setUsername] = useState("")
    // mendapatkan username tetapi kita butuh memanggil fungsinya getUsername dari auth.service 
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setUsername(getUsername(token))
        } else {
            window.location.href = "/"
        }
    }, [])

    return username
}