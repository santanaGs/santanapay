import { DivS, Input, Label } from "./styles";

interface inputProps{
    label?: string,
    type: string,
}

const InputS = ({type, label}: inputProps) => {
    return(
        <DivS>
            <Label>{label}</Label>
            <Input type={type}/>
        </DivS>
    )
}

export default InputS;