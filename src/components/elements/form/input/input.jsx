export const Input  = ({type, placeholder, name}) => {
    return (
        <input 
              type={type}
              className="border rounded-sm placeholder-opacity-10 py-2 text-sm w-full px-2" placeholder={placeholder}
              name={name}
              id={name}
              maxLength={45} />
    )
}
