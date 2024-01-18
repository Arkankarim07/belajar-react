import { useState, useEffect, useRef, Fragment } from "react"
import { CardProduct } from "../components/fragment/CardProduct"
import { getProductsApi } from "../services/product.service"
import { useLogin } from "../hooks/useLogin"
import { TableCart } from "../components/fragment/TableCart"
import { Navbar } from "../components/layout/Navbar"


// rendering list
// const products = [
//     {
//         id: 1,
//         image: "../img/guitar-1.jpg",
//         name: "Guitar",
//         harga: 500000,
//         deskripsi: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, nesciunt accusamus. Perferendis, temporibus! Eaque adipisci culpa explicabo. Iste, dolorum blanditiis.',
//     },
//     {
//         id: 2,
//         image: "../img/guitar-2.jpg",
//         name: "Guitar Electric",
//         harga: 1000000,
//         deskripsi: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
//     },
//     {
//         id: 3,
//         image: "../img/guitar-2.jpg",
//         name: "Guitar Bejir",
//         harga: 1000000,
//         deskripsi: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
//     },
// ]


export const ProductPage = () => {
    // Hook use state
    // Perubahan akan langsung diubah
    const [products, setProducts] = useState([])

    // memanggil hook useLogin dari folder hooks
    const username = useLogin()
    
    

    

    // memanggil api dari fakestoreapi
    useEffect(() => {
        getProductsApi((data) => {
            setProducts(data)
        })
    }, [])

    

    // Event Handler
   

    
    return (
        <Fragment>
        <div className="flex w-4/5 justify-center py-5 ">
            <div className=" flex gap-4 justify-start flex-wrap">
            {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                    <CardProduct.Body name={product.title}>
                    {product.description}
                    </CardProduct.Body>
                <CardProduct.Footer harga={product.harga} id={product.id} /* untuk menangkap id dari variable product */ />
            </CardProduct>
            ))}
            </div>
            <div className=" w-1/6 ">
                <h1 className="text-2xl font-bold text-blue-600">Cart</h1>
               <TableCart products={products} />
            </div>
        </div>
            {/* <div className="mt-5 flex justify-center mb-5"><Counter></Counter> </div> */}
        </Fragment> 
    )
}