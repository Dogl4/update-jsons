"use client";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Add, StarBorder } from "@mui/icons-material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function EditInfos({
  open: state,
  toggleDrawer,
  addBlock,
  closeDrawer,
}: any) {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const list = (anchor: any) => (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Box
        sx={{ width: 'auto', padding: "20px 40px" }}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, true)}
      >
        <List>
          {[{ title: "Tag", description: "[SELECT]" }, { title: "Cor de fundo", description: "#555" }, { title: "Cor do texto", description: "#555" }].map(({ title, description }, index) => (
            <>
              {/* <ListItem key={title} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItemButton>
              </ListItem> */}
              <TextField  sx={{ width: '100%' }} id="outlined-basic" label={title} variant="filled" placeholder={description} />
              <Divider />
            </>
          ))}
        </List>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Formato" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
      </Box>

      <Tooltip title="Adicionar mais blocos">
        <IconButton sx={{ "&:hover": { backgroundColor: "#11a811", color: "#333" }, borderRadius: "6px", width: '100%', marginBottom: '16px' }} onClick={() => { addBlock(), closeDrawer() } }>
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
