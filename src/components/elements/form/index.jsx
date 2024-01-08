import { Input } from "./input/input"
import { Label } from "./label/label"
export const InputForm = ({name, placeholder, type, label}) => {
    return (
        <div className="mb-6">
            <Label htmlfor={name} text={label}></Label>
            <Input type={type} name={name} placeholder={placeholder} />
        </div>
    )
}