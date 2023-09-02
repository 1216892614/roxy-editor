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

export const textCursorA = (() => {
    const textCursorAnchorA = atom(0);
    const textCursorFocusA = atom(0);

    return atom(
        (get) => ({
            anchor: get(textCursorAnchorA),
            focus: get(textCursorFocusA),
        }),
        (
            _get,
            set,
            newPrice: {
                anchor: number;
                focus: number;
            }
        ) => {
            const { anchor, focus } = newPrice;
            set(textCursorAnchorA, anchor);
            set(textCursorFocusA, focus);
        }
    );
})();
