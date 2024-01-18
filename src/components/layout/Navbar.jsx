import { useEffect, useState } from "react"
import { useLogin } from "../../hooks/useLogin"
import Button from "../elements/button"
import { useSelector } from "react-redux"

export const Navbar = () => {
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state) => state.cart.data)

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0)
        setTotalCart(sum)
    }, [cart])
    const HandleLogout = () => {
        localStorage.removeItem("token")
        window.location.href = '/'
    }
    return (
        <div className="flex justify-between items-center text-white px-6 h-[60px] bg-slate-600">
        <div className="justify-self-start">
            {username}
        </div>
        <div className="flex items-center">
            <Button onClick={HandleLogout}>Logout</Button>
            <div className="bg-gray-800 p-2 rounded-md ml-5">
                {totalCart}    
            </div>
        </div>
    </div>
    
    )
}