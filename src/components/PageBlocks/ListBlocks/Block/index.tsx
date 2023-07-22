"use client";
import { Delete, Edit } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

export default function Block({
  block: { tag, shape, backgroundColor, textColor },
  onDelete,
  onEditBlock
}: any) {


  return (
    <div style={{ position: 'relative', marginTop: '24px' }}>
      <Tooltip title="Edita este estilo de bloco" style={{ position: 'absolute', top: '-24px', right: '39px' }}>
        <IconButton sx={{ "&:hover": { backgroundColor: "#111" } }} onClick={() => onEditBlock(tag) }>
          <Edit color="info" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Deletar este estilo de bloco" style={{ position: 'absolute', top: '-24px', right: '9px' }}>
        <IconButton sx={{ "&:hover": { backgroundColor: "#111" } }} onClick={() => onDelete(tag) }>
          <Delete color="error" />
        </IconButton>
      </Tooltip>
      <a
        // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg m-3 border border-transparent flex p-3 items-center mb-1 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          height: "125px",
          width: "175px",
          borderRadius: shape,
          backgroundColor: backgroundColor,
          color: textColor,
          textAlign: "center",
        }}
      >
        <h2 className="font-semibold" style={{ fontSize: "19px" }}>
          {tag.toLocaleUpperCase()}{" "}
          <span className="inline-block transition-transform group-translate-x-1 motion-reduce:transform-none">
            - lorem ipsum
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
      </a>
    </div>
  );
}
