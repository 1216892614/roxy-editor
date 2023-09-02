import { Atom, atom } from "jotai";

export interface Char {
    value: string;
}

export interface Str {
    charList: Char[];
}

export const strA: Atom<Str> = atom({
    charList: [
        {
            value: "可",
        },
        {
            value: "编",
        },
        {
            value: "辑",
        },
        {
            value: "区",
        },
        {
            value: "域",
        },
    ],
});
