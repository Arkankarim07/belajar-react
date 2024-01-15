import { forwardRef } from "react"

export const Input  = forwardRef(({type, placeholder, name}, ref) => {
    return (
        <input 
              type={type}
              className="border focus:outline-none focus:border-sky-500 rounded-sm placeholder-opacity-10 py-2 text-sm w-full px-2" placeholder={placeholder}
              name={name}
              id={name}
              maxLength={45}
              ref={ref} />
    )
})




