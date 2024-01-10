import { useState } from "react"
import Button from "../components/elements/button"
import { CardProduct } from "../components/fragment/CardProduct"


// rendering list
const product = [
    {
        id: 1,
        image: "../img/guitar-1.jpg",
        name: "Guitar",
        harga: 500000,
        deskripsi: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, nesciunt accusamus. Perferendis, temporibus! Eaque adipisci culpa explicabo. Iste, dolorum blanditiis.',
    },
    {
        id: 2,
        image: "../img/guitar-2.jpg",
        name: "Guitar Electric",
        harga: 1000000,
        deskripsi: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
    {
        id: 3,
        image: "../img/guitar-2.jpg",
        name: "Guitar Electric",
        harga: 1000000,
        deskripsi: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
]

const email = localStorage.getItem("email")
export const ProductPage = () => {
    // use state
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        },
    ])


    const HandleAddToCart = (id) => {
        setCart([
            ...cart,
        {
            id,
            qty: 1,
        }
    ])}
    // Event Handler
    const HandleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = '/'
    }

    return (
        <>
        <div className="flex justify-between text-white px-6 items-center h-[60px] bg-slate-600">
            {email}
            <Button onClick={HandleLogout}>Logout</Button>
            </div>
        <div className="flex justify-center py-5 ">
            <div className=" flex gap-4 justify-center flex-wrap">
            {product.map((product) => (
            <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                    <CardProduct.Body name={product.name}>
                    {product.deskripsi}
                    </CardProduct.Body>
                <CardProduct.Footer harga={product.harga} id={product.id} /* untuk menangkap id dari variable product */  AddToCart={HandleAddToCart}/>
            </CardProduct>
            ))}
            </div>
            <div className="w-1/4">
                <h1 className="text-2xl font-bold text-blue-600">Cart</h1>
                <ul>
                    {cart.map((item) => (
                        <li key={item}>{item.id}</li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}