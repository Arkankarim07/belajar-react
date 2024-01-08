import { Children } from "react"

function Button(props) {
    // props adalah untuk menampung nilai parameter
  
    // membuat nilai default props
    const {children, warna = "bg-purple-700"} = props
    return (
      <button className={`h-10 px-6 font-semibold rounded-md ${warna} text-white`} type="submit">
      {children}
    </button>
    )
  }

export default Button