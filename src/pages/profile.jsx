import { useLogin } from "../hooks/useLogin"

export const ProfilePage = () => {
    const username = useLogin()
    return (
    <h1>{username}</h1>
    )
    
}