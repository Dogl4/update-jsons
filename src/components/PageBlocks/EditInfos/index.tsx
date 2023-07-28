"use client";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SketchPicker from './SketchPicker';

const ToggleButtonGroupEdit = styled(ToggleButtonGroup)({
  backgroundColor: 'rgba(0, 0, 0, 0.06)',
});


const ToggleButtonEdit = styled(ToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: 'rgba(0, 0, 0, 1.3)'
  },
  "&:hover": {
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
});

export default function EditInfos({
  open: state,
  toggleDrawer,
  addBlock,
  styleBlock,
  setStyleBlock
}: any) {
  const [open, setOpen] = useState(true);
  const [alignment, setAlignment] = useState(styleBlock.shape);
  const handleClick = () => {

    setOpen(!open);
  };

  useEffect(() => {
    if (state.isEdit) {
      const currentShape = styleBlock.shape || '0';
      setAlignment(currentShape);
      setStyleBlock({ ...styleBlock, shape: currentShape })
    }
  }, [state])

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
    setStyleBlock({ ...styleBlock, shape: newAlignment })
  };

  const changeColorInInput = (event: any, valueType: string) => {
    setStyleBlock({ ...styleBlock, [valueType]: event.target?.value });
  };

  const list = (anchor: any) => (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Box
        sx={{ width: 'auto', padding: "20px 40px" }}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, true)}
      >
        <List>
          {[
            { title: "Tag", description: "[SELECT]", value: 'tag' },
          ].map(({ title, description, value }) => (
            <>
              <TextField
                sx={{ width: '100%' }}
                id="outlined-basic"
                label={title}
                variant="filled"
                placeholder={description}
                value={styleBlock[value]}
                onChange={(e) => changeColorInInput(e, value)}
              />
              <Divider />
            </>
          ))}
          {
            [{ title: "Cor de fundo", value: 'backgroundColor', cssColor: 'backgroundColor' },
            { title: "Cor do texto", value: 'textColor', cssColor: 'color' }
          ].map(({ title, value, cssColor }) => (
            <>
              <div key={title} style={{ display: 'flex' }}>
                <h2
                  style={{
                    margin: '0 8.2px',
                    borderRadius: '3px',
                    fontWeight: '400',
                    padding: '0 8px',
                    color: '#455',
                    width: "112px",
                    [cssColor]: styleBlock[value]
                  }}
                >
                  {title}
                </h2>
                <SketchPicker
                  value={value}
                  styleBlock={styleBlock}
                  setStyleBlock={setStyleBlock}
                />
              </div>
              <Divider />
            </>
          ))
          }
        </List>

        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Formato" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ToggleButtonGroupEdit
            color="standard"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            className="format-block"
          >
            <ToggleButtonEdit value="50%" style={{ border: '3px solid black', margin: "20px", borderRadius: '50%', width: '75px', height: '50px' }}></ToggleButtonEdit>
            <ToggleButtonEdit value="50% 50% 0 0" style={{ border: '3px solid black', margin: "20px", borderRadius: '50% 50% 0 0', width: '75px', height: '50px' }}></ToggleButtonEdit>
            <ToggleButtonEdit value="0 0 50% 50%" style={{ border: '3px solid black', margin: "20px", borderRadius: '0 0 50% 50%', width: '75px', height: '50px' }}></ToggleButtonEdit>
            <ToggleButtonEdit value="0 50% 50% 0" style={{ border: '3px solid black', margin: "20px", borderRadius: '0 50% 50% 0', width: '75px', height: '50px' }}></ToggleButtonEdit>
            <ToggleButtonEdit value="50% 0 0 50%" style={{ border: '3px solid black', margin: "20px", borderRadius: '50% 0 0 50%', width: '75px', height: '50px' }}></ToggleButtonEdit>
            <ToggleButtonEdit value="0 50% 0 50%" style={{ border: '3px solid black', margin: "20px", borderRadius: '0 50% 0 50%', width: '75px', height: '50px' }}></ToggleButtonEdit>
            <ToggleButtonEdit value="50% 0 50% 0" style={{ border: '3px solid black', margin: "20px", borderRadius: '50% 0 50% 0', width: '75px', height: '50px' }}></ToggleButtonEdit>
            <ToggleButtonEdit color="success" value="0" style={{ border: '3px solid black', margin: "20px", borderRadius: '0', width: '75px', height: '50px' }}></ToggleButtonEdit>
          </ToggleButtonGroupEdit>
        </Collapse>
      </Box>

      <Tooltip title="Adicionar mais blocos">
        <IconButton
          sx={{ "&:hover": { backgroundColor: "#11a811", color: "#333" }, borderRadius: "6px", width: '100%', marginBottom: '160px' }}
          onClick={() => { addBlock() } }
        >
          Salvar
        </IconButton>
      </Tooltip>
    </div>
  );

  return (
    <Drawer
      anchor="bottom"
      open={state["bottom"]}
      onClose={toggleDrawer("bottom", false)}
    >
      {list("bottom")}
    </Drawer>
  );
}
