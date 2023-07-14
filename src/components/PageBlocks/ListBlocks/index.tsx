"use client";
import React, { useEffect } from "react";
import Block from "./Block";

export default function ListBlocks({ blocks }: any) {
  useEffect(() => {
    console.log('blocks', blocks);
  }, [blocks])
  return (
    <div style={{ display: "flex" }}>
      {blocks?.length && blocks.map((e: any) => (
        <Block key={e.name} block={e} />
      ))}
    </div>
  );
}
