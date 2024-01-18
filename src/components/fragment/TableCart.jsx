import { useSelector } from "react-redux"
import { useState, useEffect, useRef } from "react"
export const TableCart = (props) => {
    const { products } = props
    const cart = useSelector((state) => state.cart.data)
    const [totalPrice, setTotalPrice] = useState(0)

    // Logika UseEffect
    useEffect(() => {
        // jika ada isinya baru ditambahkan
        if(products && products.length > 0 && cart.length > 0) {
            // mentotalkan harga
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id)
                return acc + product.harga * item.qty
            }, 0)
            setTotalPrice(sum)
            localStorage.setItem("cart", JSON.stringify(cart))
        }   
    }, [cart, products])
    

    const totalPriceRef = useRef(null)

    // dengan menggenakan useRef dia bisa menggunakan Javascript DOM
    // dan digabung dengan useEffect
    useEffect(() => {
        if(cart.length > 0 ) {
            totalPriceRef.current.style.display = "block"
        } else {
            totalPriceRef.current.style.display = "none"
        }
    })



        // mengganti formatnya menjadi IDR
        const FormatIdr = (harga) => {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(harga)
        }

    return(
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
            {products.length > 0 && cart.map((item) => {
                const product =  products.find((product) => product.id === item.id)
                return (
                    <tr key={item.id}>
                        <td>{product.title.substring(0, 10)}..</td>
                        {/* bisa dua cara agar mengganti formatnya menjadi IDR
                        bisa memakai tolocalestring dan bisa menggunakan function (yang kita buat sendiri) */}
                        <td>${" "}{product.harga.toLocaleString('id-ID', {style: "currency", currency: "IDR"})}</td>
                        <td>{item.qty}</td>
                        <td>${""}{FormatIdr(item.qty * product.harga)}</td>
                    </tr>
                )
            })}

            <tr ref={totalPriceRef}>
                <td><b>Total Price</b></td>
                <td>${" "}{(totalPrice).toLocaleString('id-ID', {style: "currency", currency: "IDR"})}</td>
            </tr>
        </tbody>
    </table>
    )
}
