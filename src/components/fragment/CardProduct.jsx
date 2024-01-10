    import Button from "../elements/button"

    // Penerapan Nested Component
    export const CardProduct = ({children}) => {
        return(
                <div className="w-full max-w-80 mt-3 border-none rounded-lg bg-stone-900 shadow-lg flex flex-col">
                    {children}
                </div>

        )
    } 

    const Header = ({image}) => {
        return (
            <a href="">
                <img src={image} className="p-8" alt="" />
            </a>
        )
    }

    const Body = ({children, name}) => {
        return (
            <div className=" px-5 pb-5 h-full">
                    <a href="">
                        <h5 className=" text-3xl text-white font-semibold tracking-wide">{name}</h5>
                    </a>
                    <p className="text-m text-white">{children}</p>
            </div>
        )
    }


    const Footer = ({harga, AddToCart, id}) => {
        return (
            <div className="flex items-center justify-between px-4 pb-4">
            <span className="text-2xl text-white font-bold">Rp. {harga.toLocaleString('id-ID') /* tolocalestring untuk mengubah menjadi IDR */}</span>
            <Button className="px-2 text-sm" warna="bg-blue-600" onClick={() => AddToCart(id)}>Add to cart</Button>
        </div>
        )
    }

    // nested components
    CardProduct.Header = Header
    CardProduct.Body = Body
    CardProduct.Footer = Footer
