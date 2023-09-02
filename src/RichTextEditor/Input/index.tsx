import { useCallback, useEffect, useRef, useState } from "react";
import useOnKeyDown from "./useOnKeyDown";
import { useAtom, useAtomValue } from "jotai";
import { type Char, textCursorA, strA } from "./store";
import * as λ from "ramda";
import useOnSelect from "./useOnSelect";

const Input: React.FC<{
    modifiers: ((
        trigger: () => void
    ) => (char: Char) => { style: React.CSSProperties; char?: Char })[];
}> = (props) => {
    const str = useAtomValue(strA);

    const [elRef, onSelect] = useOnSelect();

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

    return (
        <div
            suppressContentEditableWarning={true}
            contentEditable="true"
            className=" outline-none rounded-b-md w-full py-2 pr-2 p-2 shadow-inner"
            ref={elRef}
            onSelect={onSelect}
            onInput={onInput}
            onKeyDown={onKeyDown}
            onClick={onClick}
            onFocus={onFocus}
        >
            {str.charList.map((c, i) => (
                <span key={i}>{c.value}</span>
            ))}
        </div>
    );
};

export default Input;
