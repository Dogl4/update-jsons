import { DEFAULT_BLOCKS } from "@/constants";
import { IBlocks } from "./Interfaces";

const BLOCKS_KEY = 'blocks';

const readLocalStorage = (key = BLOCKS_KEY): IBlocks[] | null =>
  JSON.parse(localStorage.getItem(key) as any);

const saveLocalStorage = (blocks: IBlocks = [], key = BLOCKS_KEY) => localStorage
  .setItem(key, JSON.stringify(blocks));

const hasFirstContact = () => {
  if (!readLocalStorage()) {
    saveLocalStorage(DEFAULT_BLOCKS);
  }
}

export {
  readLocalStorage,
  saveLocalStorage,
  hasFirstContact,
};
