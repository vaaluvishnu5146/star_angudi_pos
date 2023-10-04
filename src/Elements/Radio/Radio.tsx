import React from "react";

type Props = {
  name: string;
  label: string;
  options: Array<{
    name: string;
    id: string;
  }>;
};

export default function Radio({ options, name, label }: Props) {
  return (
    <div className="mb-3">
      <label className="form-label fw-bold mb-2" htmlFor={name}>
        {label}
      </label>
      {options &&
        options.map((d, i) => {
          return (
            <div className="form-check" key={`radio-${d.name}-${i}`}>
              <input
                className="form-check-input"
                type="radio"
                name={name}
                id={d.id}
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
