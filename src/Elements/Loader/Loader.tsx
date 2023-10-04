import React from "react";
import { Spinner } from "reactstrap";

export default function Loader({ label = "" }) {
  return <Spinner>{label}</Spinner>;
}
