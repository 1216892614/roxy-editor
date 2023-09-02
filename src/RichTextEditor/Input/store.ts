import { Atom, atom } from "jotai";
import * as λ from "ramda";

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

interface textCursor {
    anchor: number;
    focus: number;
    left: number;
    right: number;
}

export const textCursorA = (() => {
    const textCursorAnchorA = atom(0);
    const textCursorFocusA = atom(0);

    return atom(
        (get) =>
            ({
                anchor: get(textCursorAnchorA),
                focus: get(textCursorFocusA),
                left: λ.min(get(textCursorAnchorA), get(textCursorFocusA)),
                right: λ.max(get(textCursorAnchorA), get(textCursorFocusA)),
            } as textCursor),
        (get, set, newPrice: textCursor) => {
            const { anchor, focus, left, right } = newPrice;

            set(textCursorAnchorA, anchor);
            set(textCursorFocusA, focus);

            if (get(textCursorAnchorA) < get(textCursorFocusA)) {
                set(textCursorAnchorA, left);
                set(textCursorFocusA, right);
            } else {
                set(textCursorAnchorA, right);
                set(textCursorFocusA, left);
            }
        }
    );
})();
