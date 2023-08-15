import { useCallback, useEffect, useRef, useState } from "react";
import useOnKeyDown from "./useOnKeyDown";
import { useAtom, useAtomValue } from "jotai";
import { Char, textCursorA, strA } from "./store";

const Input: React.FC<{
    modifiers: ((
        trigger: () => void
    ) => (char: Char) => { style: React.CSSProperties; char?: Char })[];
}> = (props) => {
    const [selection, setSelection] = useState(window.getSelection());

    const elRef = useRef<HTMLDivElement>(null);

    const [textCursor, setTextCursor] = useAtom(textCursorA);

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

    const onInput = useCallback((evt: React.FormEvent<HTMLDivElement>) => {
        console.log(evt.currentTarget.textContent);
    }, []);

    const onKeyDown = useOnKeyDown();

    const onClick = useCallback(
        (evt: React.MouseEvent<HTMLDivElement>) => console.log(evt),
        []
    );

    const onFocus = useCallback(
        (evt: React.FocusEvent<HTMLDivElement>) => console.log(evt),
        []
    );

    const str = useAtomValue(strA);

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

    return (
        <div
            contentEditable="true"
            className=" outline-none rounded-b-md w-full py-2 pr-2 p-2 shadow-inner"
            ref={elRef}
            onSelect={onSelect}
            onInput={onInput}
            onKeyDown={onKeyDown}
            onClick={onClick}
            onFocus={onFocus}
        >
            {str.charList.map((c) => (
                <span>{c.value}</span>
            ))}
        </div>
    );
};

export default Input;
