import React from "react";
import "./style.scss";
import { Chip } from "@mui/material";
import { ChipProps } from "../../Interfaces/Components";

function Chips({
  color = "primary",
  label = "",
  variant = "filled",
  size = "small",
}: ChipProps) {
  return <Chip label={label} color={color} size={size} variant={"filled"} />;
}

export default Chips;
