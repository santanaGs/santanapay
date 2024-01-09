import { DivS, Input, Label } from "./styles";

interface InputProps {
  label?: string;
  type: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value ?: string
}

const InputS = ({ type, label, onChange, value }: InputProps) => {
  return (
    <DivS>
      <Label>{label}</Label>
      <Input type={type} onChange={onChange} value={value} />
    </DivS>
  );
};

export default InputS;
