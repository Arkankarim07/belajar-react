import Button from "../components/elements/button"
import { CardProduct } from "../components/fragment/CardProduct"


// rendering list
const product = [
    {
        id: 1,
        image: "../img/guitar-1.jpg",
        name: "Guitar",
        harga: "Rp.500.000",
        deskripsi: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, nesciunt accusamus. Perferendis, temporibus! Eaque adipisci culpa explicabo. Iste, dolorum blanditiis.',
    },
    {
        id: 2,
        image: "../img/guitar-2.jpg",
        name: "Guitar Electric",
        harga: "Rp.1.000.000",
        deskripsi: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    },
]
export const ProductPage = () => {
    return (
        <div className="flex justify-center gap-4">
            {product.map((product) => (
            <CardProduct>
                <CardProduct.Header image={product.image} />
                    <CardProduct.Body name={product.name}>
                    {product.deskripsi}
                    </CardProduct.Body>
                <CardProduct.Footer harga={product.harga}/>
            </CardProduct>
            ))}
           
        </div>
        
    )
}