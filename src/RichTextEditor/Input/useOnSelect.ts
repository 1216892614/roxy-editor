import { useCallback, useEffect, useState } from "react";
import { atom } from "jotai";
import * as λ from "ramda";

import { useAtom } from "jotai";
import * as React from "react";

export default (divRef: React.RefObject<HTMLDivElement>): (() => void) => {
    const [textCursor, setTextCursor] = useAtom(textCursorStaticA);

    const [selection, setSelection] = useState(window.getSelection());

    const onSelect = useCallback(() => {
        if (!divRef?.current) return;

        const el = divRef.current;

        const anchorNodeParentElement = selection?.anchorNode?.parentElement;
        const focusNodeParentElement = selection?.focusNode?.parentElement;

        if (!anchorNodeParentElement || !focusNodeParentElement) return;

        const anchorFact = Array.prototype.indexOf.call(
            el.childNodes,
            anchorNodeParentElement
        );

        const focusFact = Array.prototype.indexOf.call(
            el.childNodes,
            focusNodeParentElement
        );

        const isWithPadding = Boolean(
            (el.firstChild as HTMLSpanElement).getAttribute("padding-node")
        );

        const fixRangeIdx = (fact: number) => {
            if (fact === -1) return 0;
            if (!isWithPadding) return fact + 1;
            return fact;
        };

        setTextCursor({
            anchor: fixRangeIdx(anchorFact),
            focus: fixRangeIdx(focusFact),
        });
    }, [
        divRef,
        selection?.anchorNode?.parentElement,
        selection?.focusNode?.parentElement,
        setTextCursor,
    ]);

    useEffect(() => {
        if (
            !divRef?.current ||
            !divRef.current.children[0] ||
            textCursor.left === 0 ||
            selection?.toString() !== ""
        )
            return;

        const el = divRef.current;

        const padding = document.createElement("span");
        padding.setAttribute("padding-node", "true");
        padding.innerHTML = decodeURIComponent("%E2%80%8B");
        el.insertBefore(padding, el.children[0]);

        if (Object.values(textCursor).includes(-1)) {
            el.removeChild(padding);
            return;
        }

        return () => {
            el.removeChild(padding);
        };
    }, [divRef, selection, textCursor, textCursor.anchor, textCursor.focus]);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        document.addEventListener(
            "selectionchange",
            () => {
                setSelection(window.getSelection());
            },
            { signal }
        );

        return () => controller.abort();
    }, []);

    console.log(Object.values(textCursor), selection?.toString());

    return onSelect;
};

const textCursorStaticA = (() => {
    const textCursorAnchorA = atom(0);
    const textCursorFocusA = atom(0);

    return atom(
        (get) => ({
            anchor: get(textCursorAnchorA),
            focus: get(textCursorFocusA),
            left: λ.min(get(textCursorAnchorA), get(textCursorFocusA)),
            right: λ.max(get(textCursorAnchorA), get(textCursorFocusA)),
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
