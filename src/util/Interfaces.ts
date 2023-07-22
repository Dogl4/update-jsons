export type IBlock = {
  tag: string;
  shape: string;
  backgroundColor: string;
  textColor: string;
} | null;

export type IBlocks = IBlock[] | null | [];
