"use client";
import React, { useState, KeyboardEvent, MouseEvent, useEffect } from "react";
import ButtonAddBlock from "../ButtonAddBlock";
import ListBlocks from "./ListBlocks";
import EditInfos from "./EditInfos";
import { hasFirstContact, readLocalStorage, saveLocalStorage } from "@/util/localStorage";
import { IBlocks } from "@/util/Interfaces";

type Anchor = "bottom";

const DEFAULT_BLOCK = {
  tag: '',
  shape: '0',
  backgroundColor: '',
  textColor: '',
};

export default function PageBlocks({ blocks }: any) {
  const [listBocks, setListBocks] = useState() as any;
  const [state, setState] = useState({ bottom: false });
  const [styleBlock, setStyleBlock] = useState(DEFAULT_BLOCK);
  
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
    const newList = [...listBocks, { ...styleBlock }];
    setListBocks(newList);
    saveLocalStorage(newList as any);
    setStyleBlock(DEFAULT_BLOCK);
  };

  const onDelete = (currentTag = null as any) => {
    if (currentTag) {
      const listList = listBocks.filter((e: any) => e.tag.toLocaleUpperCase() !== currentTag.toLocaleUpperCase())
      setListBocks(listList);
      saveLocalStorage(listList as any);
    }
  }

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
      <ListBlocks blocks={listBocks} onDelete={onDelete} />
      <EditInfos
        open={state}
        toggleDrawer={toggleDrawer}
        addBlock={addBlock}
        closeDrawer={closeDrawer}
        styleBlock={styleBlock}
        setStyleBlock={setStyleBlock}
      />
    </>
  );
}
