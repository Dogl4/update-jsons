"use client";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Add } from "@mui/icons-material";

export default function EditInfos({
  open: state,
  toggleDrawer,
  addBlock,
  closeDrawer,
}: any) {
  const list = (anchor: any) => (
    <>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, true)}
      >
        <List>
          {["Tag", "Cor", "Formato"].map((text, index) => (
            <>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Box>
      <Tooltip title="Adicionar mais blocos">
        <IconButton sx={{ "&:hover": { backgroundColor: "#111", color: "#fff" }, borderRadius: "0" }} onClick={() => { addBlock(), closeDrawer() } }>
          <Add color="success" />
          Salvar
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <Drawer
      anchor={"bottom"}
      open={state["bottom"]}
      onClose={toggleDrawer("bottom", false)}
    >
      {list("bottom")}
    </Drawer>
  );
}
