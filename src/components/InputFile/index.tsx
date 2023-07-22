"use client";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Download, FileUpload } from "@mui/icons-material";
import { styledJson } from "../../util/editJson";
import { hasFirstContact, readLocalStorage } from "@/util/localStorage";

export default function InputFile() {
  const [file, setFile] = useState({ file: {}, name: "" }) as any;
  const [newFile, setNewFile] = useState() as any;
  const [hasJson, setHasJson] = useState();

  useEffect(() => {
    hasFirstContact();
  }, []);

  useEffect(() => {
    setHasJson(file.file && Object.values(file.file).length);
  }, [file]);

  const getFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const currentFile = e.target.files[0];
      if (currentFile && isJson(currentFile)) {
        const parsedData = (await readJsonFile(e.target.files[0])) as any;
        setFile({ file: parsedData, name: currentFile.name });
      } else {
        alert("Não entendi o json inserido");
      }
    }
  };

  const isJson = (file: any = { name: "", type: "" }): any => {
    const TYPE_JSON = "application/json";
    const END_TYPE_JSON = ".json";
    const { name = "", type = "" } = file;
    return !!(type === TYPE_JSON && name.slice(-5) === END_TYPE_JSON);
  };

  const readJsonFile = (file: Blob) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        if (event.target) {
          resolve(JSON.parse(event.target.result as string));
        }
      };

      fileReader.onerror = (error) => reject(error);
      fileReader.readAsText(file);
    });

  const exportJSON = (data: any) => {
    return `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
  };

  const styleJson = () => {
    const currentStyle = readLocalStorage();
    const jsonEdited = styledJson(currentStyle, file.file);
    setNewFile(jsonEdited);
  };

  return (
    <div className="flex flex-col">
      <div className="flex space-x-4">
        <a
          href={exportJSON(file.file)}
          download={file.name}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="outlined"
            color="error"
            style={
              !hasJson
                ? {
                    backgroundColor: "#888788",
                    color: "#111",
                    cursor: "not-allowed",
                    pointerEvents: "all !important",
                  }
                : ({} as any)
            }
            disabled={!hasJson}
          >
            <Download fontSize="small" />
            <span style={{ marginLeft: "8px" }}>Json antigo</span>
          </Button>
        </a>

        <Button variant="contained" component="label">
          <FileUpload fontSize="small" />
          <span style={{ marginLeft: "8px" }}>Json</span>
          <input
            type="file"
            hidden
            accept=".json,application/json"
            onChange={(e) => getFile(e)}
          />
        </Button>

        <Button
          variant={!hasJson ? "outlined" : "contained"}
          component="label"
          color="success"
          onClick={styleJson}
          style={
            !hasJson
              ? {
                  backgroundColor: "#888788",
                  color: "#111",
                  cursor: "not-allowed",
                  pointerEvents: "all !important",
                }
              : ({} as any)
          }
          disabled={!hasJson}
        >
          Estilizar
        </Button>
      </div>
      <div className="flex flex-row-reverse mt-2">
        <a
          href={exportJSON(newFile)}
          download="new_json.json"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant={!(hasJson && newFile) ? "outlined" : "contained"}
            component="label"
            color="success"
            style={
              !(hasJson && newFile)
                ? {
                    backgroundColor: "#888788",
                    color: "#111",
                    cursor: "not-allowed",
                    pointerEvents: "all !important",
                  }
                : ({} as any)
            }
            disabled={!(hasJson && newFile)}
          >
            <Download fontSize="small" />
            <span style={{ marginLeft: "8px" }}>Json novo</span>
          </Button>
        </a>
      </div>
    </div>
  );
}
