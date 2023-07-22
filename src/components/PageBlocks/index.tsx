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
  const [state, setState] = useState({ bottom: false, isEdit: false });
  const [styleBlock, setStyleBlock] = useState(DEFAULT_BLOCK);
  const [tagToEdit, setTagToEdit] = useState(null) as any;
  
  useEffect(() => {
    hasFirstContact();
  }, []);

  useEffect(() => {
    setListBocks(readLocalStorage());
  }, []);

  const openDrawer = ({ isEdit } = { isEdit: false }) => {
    setState({ bottom: true, isEdit });
  };

  const closeDrawer = () => {
    setState({ bottom: false, isEdit: false });
    setStyleBlock(DEFAULT_BLOCK);
  };

  const addBlock = () => {
    let newList = [...listBocks];
    if (state.isEdit && tagToEdit) {
      const index = listBocks.findIndex(({ tag }: any) => tagToEdit.toLocaleUpperCase() === tag.toLocaleUpperCase())
      listBocks[index] = styleBlock;
      newList = [...listBocks];
    } else {
      newList = [...listBocks, { ...styleBlock }];
    }
    setListBocks(newList);
    saveLocalStorage(newList as any);
    setStyleBlock(DEFAULT_BLOCK);
    closeDrawer();
    setTagToEdit(null);
  };

  const onDelete = (currentTag = null as any) => {
    if (currentTag) {
      const newList = listBocks.filter((e: any) => e.tag.toLocaleUpperCase() !== currentTag.toLocaleUpperCase())
      setListBocks(newList);
      saveLocalStorage(newList as any);
    }
  }

  const onEditBlock = (currentTag = null as any) => {
    const listList = listBocks.find((e: any) => e.tag.toLocaleUpperCase() === currentTag.toLocaleUpperCase())
    if (listList) {
      setStyleBlock({ ...listList })
      openDrawer({ isEdit: true });
      setTagToEdit(currentTag)
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
      <ListBlocks blocks={listBocks} onDelete={onDelete} onEditBlock={onEditBlock} />
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
