import { DEFAULT_BLOCKS } from "@/constants";
import { IBlocks } from "./Interfaces";

const BLOCKS_KEY = 'blocks';

const readLocalStorage = (key = BLOCKS_KEY): object | null =>
  JSON.parse(localStorage.getItem(key) as any);

const saveLocalStorage = (block: IBlocks = [], key = BLOCKS_KEY) => localStorage
  .setItem(key, JSON.stringify(block));

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
