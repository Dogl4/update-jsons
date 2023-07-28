"use strict";

import React, { useState, useEffect } from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import { COLORS_OF_PALLET } from "@/constants";

export default function SketchExample({ styleBlock, setStyleBlock, value }: any) {
  const [state, setState] = useState({
    displayColorPicker: false,
    background: styleBlock[value] || "#000"
  });

  const handleClick = () => {
    setState({ ...state, displayColorPicker: !state.displayColorPicker });
  };

  const handleClose = () => {
    setState({ ...state, displayColorPicker: false });
  };

  const handleChange = (color: any | undefined) => {
    setState({ ...state, background: color.hex });
    setStyleBlock({ ...styleBlock, [value]: color.hex });
  };

  const styles = reactCSS({
    default: {
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 0.5px rgba(0,0,0,.1)",
        cursor: "pointer",
        margin: '1px'
      },
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: state.background,
      }
    },
  });

  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div
          style={{
            width: "100px",
            height: "16px",
            borderRadius: "2px",
            background: state.background,
          }}
        />
      </div>
      {state.displayColorPicker ? (
        <div style={{ position: "absolute", zIndex: "2" }}>
          <div style={{ position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px" }} onClick={handleClose} />
          <SketchPicker
            presetColors={COLORS_OF_PALLET}
            color={state.background}
            onChange={handleChange}
          />
        </div>
      ) : null}
    </div>
  );
}
