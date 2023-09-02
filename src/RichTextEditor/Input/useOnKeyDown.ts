import { useCallback } from "react";
import { textCursorA } from "./store";

const keyReactorMap: { [k: string]: () => void } = {
    ArrowRight: () => console.log("ArrowRight", textCursorA),
    ArrowLeft: () => console.log("ArrowLeft", textCursorA),
    ArrowUp: () => console.log("ArrowUp"),
    ArrowDown: () => console.log("ArrowDown"),
    Enter: () => console.log("Enter"),
    Backspace: () => console.log("Backspace"),
    Shift: () => console.log("Shift"),
    Control: () => console.log("Control"),
    Tab: () => console.log("Tab"),
};

export default () => {
    const onKeyDown = useCallback(
        (evt: React.KeyboardEvent<HTMLDivElement>) => {
            const keyReactor = keyReactorMap[evt.key];

            if (typeof keyReactor === "function") {
                evt.stopPropagation();
                keyReactor();
            }
        },
        []
    );

    return onKeyDown;
};
