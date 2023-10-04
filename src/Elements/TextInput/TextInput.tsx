import { Input } from "reactstrap";

type Props = {
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  overrides?: {};
  id: string;
  name: string;
  label: string;
  value: string;
};

export default function TextInput({
  placeholder = "",
  onChange,
  overrides = {},
  type = "",
  id = "",
  name = "",
  label = "",
  value = "",
}: Props) {
  return (
    <div className="mb-3">
      <label className="form-label fw-bold" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-control"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        style={overrides}
        value={value}
      />
    </div>
  );
}
