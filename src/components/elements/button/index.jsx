import { Children } from "react"

function Button(props) {
    // props adalah untuk menampung nilai parameter
  
    // membuat nilai default props
    const {children, className, warna = "bg-purple-700", onClick = () => {} /* ini contoh event handler */, type="button",} = props
    return (
      <button className={`h-10 px-6 ${className} font-semibold rounded-md ${warna}  text-white`} type={type}
      onClick={onClick}>
      {children}
    </button>
    )
  }

export default Button