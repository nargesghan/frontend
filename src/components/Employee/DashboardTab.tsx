import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import Link from "next/link";
interface Props {
  activeTab: string;
  // define your props here
}

const Item = styled("button")({
  color: "#667085",
  backgroundColor: "#FFFFFF",
  padding: 8,
  border: "none",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
});

const DashboardTab: React.FC<Props> = ({ activeTab }) => {
  return (
    <Stack direction="row" spacing={2} alignItems={"flex-end"}>
      <Link href="/employee/recommendedjobs">
        <Item
          sx={{
            color:
              activeTab === "/employee/recommendedjobs" ? "#0EC5D7" : "#667085",
          }}
        >
          Recommended Jobs
        </Item>
      </Link>
      <Link href={"/employee/interestedjobs"}>
        <Item
          sx={{
            color:
              activeTab === "/employee/interestedjobs" ? "#0EC5D7" : "#667085",
          }}
        >
          Interested Jobs
        </Item>
      </Link>
      <Link href={"/employee/newest"}>
        <Item
          sx={{
            color: activeTab === "/employee/newest" ? "#0EC5D7" : "#667085",
          }}
        >
          newest 
        </Item>
      </Link>
    </Stack>
  );
};

export default DashboardTab;
