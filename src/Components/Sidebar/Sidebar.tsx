import React from "react";
import "./style.scss";
import { Box } from "@mui/material";
import ICONS from "../../Assets/icons";

function Sidebar() {
  return (
    <Box className="sidebar-component">
      <Box className="branding">
        <img
          style={{
            width: "100%",
          }}
          src="favicon.png"
          alt="logo"
        />
      </Box>
      <Box className="clearfix-50"></Box>
      <Box className="journeys-area">
        <Box className="link">
          <ICONS.HOME />
        </Box>
        <Box className="link">
          <ICONS.TIMING />
        </Box>
        <Box className="link">
          <ICONS.BREIFCASE />
        </Box>
        <Box className="link">
          <ICONS.TROPHY />
        </Box>
        <Box className="link">
          <ICONS.SETTINGS />
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
