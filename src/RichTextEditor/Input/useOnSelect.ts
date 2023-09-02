import { useCallback, useEffect, useRef, useState } from "react";

import { useAtom } from "jotai";
import { textCursorA } from "./store";

export default (): [React.RefObject<HTMLDivElement>, () => void] => {
    const [textCursor, setTextCursor] = useAtom(textCursorA);

    const elRef = useRef<HTMLDivElement>(null);

    const [selection, setSelection] = useState(window.getSelection());

    const onSelect = useCallback(() => {
        const tmp = textCursor;

        const anchorNodeParentElement = selection?.anchorNode?.parentElement;
        const focusNodeParentElement = selection?.focusNode?.parentElement;

        if (anchorNodeParentElement && elRef.current)
            tmp.anchor = Array.prototype.indexOf.call(
                elRef?.current.childNodes,
                anchorNodeParentElement
            );

        if (focusNodeParentElement && elRef.current)
            tmp.focus = Array.prototype.indexOf.call(
                elRef?.current.childNodes,
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

    return [elRef, onSelect];
};
