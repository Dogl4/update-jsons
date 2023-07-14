"use client";
import React, { useState } from "react";
import ButtonAddBlock from "../ButtonAddBlock";
import ListBlocks from "./ListBlocks";
import EditInfos from "./EditInfos";

type Anchor = 'bottom';

export default function PageBlocks({ blocks }: any) {
  const [listBocks, setListBocks] = useState([{ name: "1" }, { name: "2" }]) as any;
  const [state, setState] = React.useState({ bottom: false});

  const openDrawer = () => {
    setState({ bottom: true })
  };

  const closeDrawer = () => {
    setState({ bottom: false })
  };

  const addBlock = () => {    
    setListBocks([...listBocks, { name: `${listBocks.length + 1}` }]);
  }

  const toggleDrawer =
  (anchor: Anchor, open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
  <>
    <ButtonAddBlock openDrawer={openDrawer} />
    <ListBlocks blocks={listBocks} />
    <EditInfos open={state} toggleDrawer={toggleDrawer} addBlock={addBlock} closeDrawer={closeDrawer} />
  </>
  );
}
