import { useState } from "react"
import Button from "../components/elements/button"
import { CardProduct } from "../components/fragment/CardProduct"


// rendering list
const products = [
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
        name: "Guitar Bejir",
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

    // mengganti formatnya menjadi IDR
    const FormatIdr = (harga) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(harga)
    }


    const HandleAddToCart = (id) => {
        // jika item nya sudah pernah ditambahkan dia tidak membuat list baru sedangkan menambah qty nya
        if(cart.find((item) => item.id == id)) {
            setCart(cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item))
        } else 
        {
            // jika belum ada tambah 1
            setCart([...cart, {id, qty: 1}]) 
        }
    }
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
        <div className="flex w-4/5 justify-center py-5 ">
            <div className=" flex gap-4 justify-center flex-wrap">
            {products.map((product) => (
            <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                    <CardProduct.Body name={product.name}>
                    {product.deskripsi}
                    </CardProduct.Body>
                <CardProduct.Footer harga={product.harga} id={product.id} /* untuk menangkap id dari variable product */  AddToCart={HandleAddToCart}/>
            </CardProduct>
            ))}
            </div>
            <div className=" w-1/6 ">
                <h1 className="text-2xl font-bold text-blue-600">Cart</h1>
                {/* <ul>
                    {cart.map((item) => {
                        <li key={item}>{item.id}</li>
                    })}
                </ul> */}
                <table className=" text-left table-auto border-separate ">
                    <thead className="">
                        <tr className=" bg-gray-300">
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody className=" bg-slate-100">
                        {cart.map((item) => {
                            const product = products.find((product) => product.id === item.id)
                            return (
                                <tr key={item.id}>
                                    <td>{product.name}</td>
                                    {/* bisa dua cara agar mengganti formatnya menjadi IDR
                                    bisa memakai tolocalestring dan bisa menggunakan function (yang kita buat sendiri) */}
                                    <td>Rp.{product.harga.toLocaleString('id-ID')}</td>
                                    <td>{item.qty}</td>
                                    <td>{FormatIdr(item.qty * product.harga)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}