import { useCallback } from "react";
import useOnKeyDown from "./useOnKeyDown";
import { useAtom } from "jotai";
import { type Char, strA } from "./store";
import useOnSelect from "./useOnSelect";

const Input: React.FC<{
    modifiers: ((
        trigger: () => void
    ) => (char: Char) => { style: React.CSSProperties; char?: Char })[];
}> = ({ modifiers }) => {
    const [str, setStr] = useAtom(strA);

    const [divRef, onSelect] = useOnSelect();

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
            className=" outline-none rounded-b-md w-full py-2 pr-2 p-2 shadow-inner "
            ref={divRef}
            onSelect={onSelect}
            onInput={onInput}
            onKeyDown={onKeyDown}
            onClick={onClick}
            onFocus={onFocus}
        >
            {str.charList.map((c, i) => (
                <span
                    key={i}
                    className=" whitespace-pre"
                    // style={
                    //     i === 0 ? { height: 0, width: 0, fontSize: 0 } : void 0
                    // }
                >
                    {c.value}
                </span>
            ))}
        </div>
    );
};

export default Input;
