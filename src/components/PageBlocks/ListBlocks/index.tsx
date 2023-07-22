"use client";
import React from "react";
import Block from "./Block";
import { IBlock } from "@/util/Interfaces";

export default function ListBlocks({ blocks, onDelete }: any) {
  return blocks?.length ? (
    <div className="format-block">
      {blocks.map((block: IBlock, index: number) => (
        <Block key={`key_block${index + 1}`} block={block} onDelete={onDelete} />
      ))}
    </div>
  ) : null;
}
