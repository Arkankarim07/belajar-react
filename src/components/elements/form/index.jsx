import { forwardRef } from "react"
import { Input } from "./input/input"
import { Label } from "./label/label"
export const InputForm = forwardRef(({name, placeholder, type, label, }, ref) => {
    return (
        <div className="mb-6">
            <Label htmlfor={name} text={label}></Label>
            <Input type={type} name={name} placeholder={placeholder} ref={ref} />
        </div>
    )
})