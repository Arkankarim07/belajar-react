    import { Link } from "react-router-dom"
    import Button from "../elements/button"
    import { useDispatch } from "react-redux"
    import { addToCart } from "../../redux/slices/cartSlices"

    // Penerapan Nested Component
    export const CardProduct = ({children}) => {
        return(
                <div className="w-full max-w-xs mt-3 border-none rounded-lg bg-stone-900 shadow-lg flex flex-col">
                    {children}
                </div>

        )
    } 

    const Header = ({image, id}) => {
        return (
            <Link to={`/product/detail/${id}`}>
                <img src={image} className="p-8 h-72 w-full object-cover" alt="" />
            </Link>
        )
    }

    const Body = ({children, name}) => {
        return (
            <div className=" px-5 pb-5 h-full">
                    <a href="">
                        <h5 className=" text-3xl text-white font-semibold tracking-wide">{name.substring(0, 20)}..</h5>
                    </a>
                    <p className="text-m text-white">{children.substring(0, 100)}..</p>
            </div>
        )
    }


    const Footer = ({harga, id}) => {
        const dispatch = useDispatch()
        return (
            <div className="flex items-center justify-between px-4 pb-4">
            <span className="text-2xl text-white font-bold">${""}{harga /* tolocalestring untuk mengubah menjadi IDR */}</span>
            <Button className="px-2 text-sm" warna="bg-blue-600" onClick={() => dispatch(addToCart({id, qty: 1}))}>Add to cart</Button>
        </div>
        )
    }

    // nested components
    CardProduct.Header = Header
    CardProduct.Body = Body
    CardProduct.Footer = Footer
