import { useCallback, useEffect, useRef, useState } from "react";

import { useAtom } from "jotai";
import { textCursorA } from "./store";

export default (): [React.RefObject<HTMLDivElement>, () => void] => {
    const divRef = useRef<HTMLDivElement>(null);

    const [textCursor, setTextCursor] = useAtom(textCursorA);

    const [selection, setSelection] = useState(window.getSelection());

    const onSelect = useCallback(() => {
        if (!divRef?.current) return;

        const el = divRef.current;
        const tmp = textCursor;

        const anchorNodeParentElement = selection?.anchorNode?.parentElement;
        const focusNodeParentElement = selection?.focusNode?.parentElement;

        if (!anchorNodeParentElement || !focusNodeParentElement) return;

        tmp.anchor = Array.prototype.indexOf.call(
            el.childNodes,
            anchorNodeParentElement
        );

        tmp.focus = Array.prototype.indexOf.call(
            el.childNodes,
            focusNodeParentElement
        );

        setTextCursor(tmp);
    }, [
        selection?.anchorNode?.parentElement,
        selection?.focusNode?.parentElement,
        setTextCursor,
        textCursor,
    ]);

    useEffect(() => {
        if (!divRef?.current || !divRef.current.children[0]) return;
        const el = divRef.current;

        const padding = document.createElement("span");
        padding.innerHTML = `<span style="white-space: pre;">${decodeURIComponent(
            "%E2%80%8B"
        )}</span>`;
        el.insertBefore(padding, el.children[0]);

        if (Object.values(textCursor).includes(-1)) {
            el.removeChild(padding);
            return;
        }

        return () => {
            el.removeChild(padding);
        };
    }, [textCursor, textCursor.anchor, textCursor.focus]);

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

    return [divRef, onSelect];
};
