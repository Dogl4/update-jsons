"use client";
import React, { useState } from "react";
import ButtonAddBlock from "../ButtonAddBlock";
import ListBlocks from "./ListBlocks";

export default function PageBlocks({ blocks }: any) {
  const [listBocks, setListBocks] = useState([{ name: "1" }, { name: "2" }]) as any;
  const addBlock = () => {
    setListBocks([...listBocks, { name: `${listBocks.length + 1}` }]);
  };

  return (
  <>
    <ButtonAddBlock addBlock={addBlock} />
    <ListBlocks blocks={listBocks} />
  </>
  );
}
