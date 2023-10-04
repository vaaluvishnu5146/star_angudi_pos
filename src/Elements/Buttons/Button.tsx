import Loader from "../Loader/Loader";

type Props = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  overrides?: {};
  isLoading?: boolean;
};

export default function ButtonC({
  label,
  onClick,
  overrides = {},
  isLoading,
}: Props) {
  return (
    <button
      className="btn btn-success"
      style={{ ...overrides, fontWeight: "bold" }}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : label}
    </button>
  );
}
