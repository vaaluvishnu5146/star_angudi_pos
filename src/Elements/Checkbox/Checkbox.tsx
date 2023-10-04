import React from "react";
import { SyntheticEventData } from "react-dom/test-utils";

type Props = {
  name: string;
  label: string;
  options: Array<{
    name: string;
    id: string;
  }>;
  value: boolean;
  handleChange: (event: any) => any;
};

export default function Checkbox({
  options,
  name,
  label,
  handleChange,
  value,
}: Props) {
  return (
    <div className="mb-3">
      <label className="form-label fw-bold" htmlFor={name}>
        {label}
      </label>
      {options &&
        options.map((d, i) => {
          return (
            <div className="form-check" key={`radio-${d.name}-${i}`}>
              <input
                className="form-check-input"
                type="checkbox"
                name={name}
                id={d.id}
                onChange={handleChange}
                checked={value}
              />
              <label className="form-check-label" htmlFor={d.id}>
                {d.name}
              </label>
            </div>
          );
        })}
    </div>
  );
}
