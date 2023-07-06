"use client";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Download, FileUpload } from '@mui/icons-material';

export default function InputFile() {
  const [file, setFile] = useState();

  useEffect(() => {
    console.log("file", file as any);
  }, [file]);

  const getFile = (e: any) => {
    e.preventDefault();
    const currentFile = e.target.files[0];

    if (currentFile && isJson(currentFile)) {
      setFile(e.target.files[0]);
    } else {
      alert("Não entendi o json inserido");
    }
  };

  const isJson = (file: any = { name: "", type: "" }): any => {
    const TYPE_JSON = "application/json";
    const END_TYPE_JSON = ".json";
    const { name = "", type = "" } = file;
    return !!(type === TYPE_JSON && name.slice(-5) === END_TYPE_JSON);
  };

  return (
    <div className="flex flex-col">
      <div className="flex space-x-4">
        <a
          href={file}
          download={(file as any)?.name}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="outlined"
            color="error"
            style={
              !(file && (file as any)?.name)
                ? {
                    backgroundColor: "#888788",
                    color: "#111",
                    cursor: "not-allowed",
                    pointerEvents: "all !important",
                  }
                : ({} as any)
            }
            disabled={!(file && (file as any)?.name)}
          >
            <Download fontSize="small"/>
            <span style={{ marginLeft: '8px' }}>
              Json antigo
            </span>
          </Button>
        </a>

        <Button variant="contained" component="label">
          <FileUpload fontSize="small"/>
          <span style={{ marginLeft: '8px' }}>
            Json
          </span>
          <input type="file" hidden onChange={(e) => getFile(e)} />
        </Button>

        <Button
          variant={!(file && (file as any)?.name) ? "outlined" : "contained"}
          component="label"
          color="success"
          style={
            !(file && (file as any)?.name)
              ? {
                  backgroundColor: "#888788",
                  color: "#111",
                  cursor: "not-allowed",
                  pointerEvents: "all !important",
                }
              : ({} as any)
          }
          disabled={!(file && (file as any)?.name)}
        >
          Estilizar
        </Button>
      </div>
      <div className="flex flex-row-reverse mt-2">
        <Button
          variant={!(file && (file as any)?.name) ? "outlined" : "contained"}
          component="label"
          color="success"
          style={
            !(file && (file as any)?.name)
              ? {
                  backgroundColor: "#888788",
                  color: "#111",
                  cursor: "not-allowed",
                  pointerEvents: "all !important",
                }
              : ({} as any)
          }
          disabled={!(file && (file as any)?.name)}
        >
          <Download fontSize="small"/>
          <span style={{ marginLeft: '8px' }}>
            Json novo
          </span>
        </Button>
      </div>
    </div>
  );
}
