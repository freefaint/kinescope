import { TItem } from "./types";
import { v4 as uuid } from "uuid";

export const data: TItem[] = [
  {
    id: uuid(),
    name: "Основной родитель 1"
  },
  {
    id: uuid(),
    name: "Основной родитель 2"
  },
  {
    id: uuid(),
    name: "Основной родитель 3"
  },
]