"use client";
import React from "react";
import { Add } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

export default function ButtonAddBlock({ addBlock }: any) {
  return (
    <Tooltip title="Adicionar mais blocos">
      <IconButton sx={{ "&:hover": { backgroundColor: "#111" } }} onClick={() => addBlock() }>
        <Add color="success" />
      </IconButton>
    </Tooltip>
  );
}
