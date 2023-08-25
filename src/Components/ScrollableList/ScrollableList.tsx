import * as React from "react";
import { useTheme } from "@mui/material/styles";
import "./style.scss";
import { Box } from "@mui/material";

export interface OptionT {
  id: number;
  label: string;
  value: string;
}

type AppProps = {
  data: OptionT[];
  selected: Number;
};

export default function ScrollableList({ data, selected = 0 }: AppProps) {
  const { palette } = useTheme();
  return (
    <div className="scrollable-list-container">
      {data.map((d, i) => (
        <Box
          className={"category-card"}
          key={i}
          sx={{
            background:
              selected === d.id ? palette.primary.main : palette.common.white,
            color:
              selected === d.id ? palette.common.white : palette.primary.main,
          }}
        >
          <p className="fw-bold" id="">
            {d.label}
          </p>
        </Box>
      ))}
    </div>
  );
}
