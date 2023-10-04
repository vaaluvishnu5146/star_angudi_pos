import { SetStateAction } from "react";
import "./style.scss";
export interface OptionT {
  id: number;
  label: string;
  value: string;
}

type AppProps = {
  data: OptionT[];
  selected: Number;
  handleChange: (id: SetStateAction<number>) => void;
};

export default function ScrollableList({
  data,
  selected = 0,
  handleChange,
}: AppProps) {
  return (
    <div className="scrollable-list-container">
      {data.map((d, i) => (
        <div
          className={`category-card ${
            selected === d.id ? "bg-success text-white" : "bg-success-subtle"
          }`}
          key={i}
          onClick={() => handleChange(d.id)}
        >
          <p className="fw-bold" id="">
            {d.label}
          </p>
        </div>
      ))}
    </div>
  );
}
