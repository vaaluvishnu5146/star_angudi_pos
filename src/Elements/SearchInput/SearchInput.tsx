import * as React from "react";
import "./style.scss";
import { Box } from "@mui/material";
import ButtonC from "../Buttons/Button";

export default function SearchInput() {
  return (
    <Box className="search-input-container">
      <input placeholder="Search for categories" />
      <ButtonC label="Search" onClick={() => {}} />
    </Box>
  );
}
