"use client";
import React, { useState, KeyboardEvent, MouseEvent, useEffect } from "react";
import ButtonAddBlock from "../ButtonAddBlock";
import ListBlocks from "./ListBlocks";
import EditInfos from "./EditInfos";
import { hasFirstContact, readLocalStorage } from "@/util/localStorage";

type Anchor = "bottom";

export default function PageBlocks({ blocks }: any) {
  const [listBocks, setListBocks] = useState() as any;
  const [state, setState] = React.useState({ bottom: false });
  
  useEffect(() => {
    hasFirstContact();
  }, []);

  useEffect(() => {
    setListBocks(readLocalStorage());
  }, []);

  const openDrawer = () => {
    setState({ bottom: true });
  };

  const closeDrawer = () => {
    setState({ bottom: false });
  };

  const addBlock = () => {
    setListBocks([...listBocks, { name: `${listBocks.length + 1}` }]);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <>
      <ButtonAddBlock openDrawer={openDrawer} />
      <ListBlocks blocks={listBocks} />
      <EditInfos
        open={state}
        toggleDrawer={toggleDrawer}
        addBlock={addBlock}
        closeDrawer={closeDrawer}
      />
    </>
  );
}
