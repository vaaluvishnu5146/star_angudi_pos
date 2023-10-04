import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

export default function Select({
  label = "",
  id = "",
  name = "",
  options = [],
}) {
  return (
    <FormGroup>
      <Label className="fw-bold" for={id}>
        {label}
      </Label>
      <Input id={id} name={name} type="select">
        <option>Select</option>
        {options.map((o, i) => (
          <option key={`${o}-${i}`}>Select</option>
        ))}
      </Input>
    </FormGroup>
  );
}
