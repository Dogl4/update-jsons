"use client";
import React, { useState, KeyboardEvent, MouseEvent, useEffect } from "react";
import ButtonAddBlock from "../ButtonAddBlock";
import ListBlocks from "./ListBlocks";
import EditInfos from "./EditInfos";
import { hasFirstContact, readLocalStorage, saveLocalStorage } from "@/util/localStorage";

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
  const [indexToEdit, setIndexToEdit] = useState(null) as any;
  
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
    if (state.isEdit && indexToEdit >= 0) {
      listBocks[indexToEdit] = styleBlock;
      newList = [...listBocks];
    } else {
      newList = [...listBocks, { ...styleBlock }];
    }
    setListBocks(newList);
    saveLocalStorage(newList as any);
    setStyleBlock(DEFAULT_BLOCK);
    closeDrawer();
    setIndexToEdit(null);
  };

  const onDelete = (index = -1 as number) => {
    if (index >= 0 && listBocks[index]) {
      let newList = [...listBocks];
      newList.splice(index, 1);
      setListBocks(newList);
      saveLocalStorage(newList as any);
    }
  }

  const onEditBlock = (index = -1 as number) => {
    const listList = listBocks[index]
    if (listList) {
      setStyleBlock({ ...listList })
      openDrawer({ isEdit: true });
      setIndexToEdit(index)
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
