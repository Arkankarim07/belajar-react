export const Label = ({text, htmlfor}) => {
    return (
        <label
              htmlFor={htmlfor}
              className="block font-bold fs-4 my-2 text-slate-700">
                {text}
        </label>
    )
}