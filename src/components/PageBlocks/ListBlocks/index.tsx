"use client";
import React, { useEffect } from "react";
import Block from "./Block";
import { IBlock } from "@/util/Interfaces";

export default function ListBlocks({ blocks }: any) {
  useEffect(() => {
    console.log('blocks', blocks);
  }, [blocks])
  return (
    <div style={{ display: "flex" }}>
      {blocks?.length && blocks.map((block: IBlock, index: number) => (
        <Block key={`key_block${index + 1}`} block={block} />
      ))}
    </div>
  );
}
