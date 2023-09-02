import { useCallback } from "react";
import { useAtom } from "jotai";

import { textCursorA } from "./store";

export default () => {
    const [textCursor, setTextCursor] = useAtom(textCursorA);

    const onKeyDown = useCallback(
        (evt: React.KeyboardEvent<HTMLDivElement>) => {
            const keyReactorMap: { [k: string]: () => void } = {
                ArrowRight: () => console.log(Object.values(textCursor)),
                ArrowLeft: () => console.log(Object.values(textCursor)),
                ArrowUp: () => console.log("ArrowUp"),
                ArrowDown: () => console.log("ArrowDown"),
                Enter: () => console.log("Enter"),
                Backspace: () => console.log("Backspace"),
                Shift: () => console.log("Shift"),
                Control: () => console.log("Control"),
                Tab: () => console.log("Tab"),
            };

            const keyReactor = keyReactorMap[evt.key];

            if (typeof keyReactor === "function") {
                evt.stopPropagation();
                keyReactor();
            }
        },
        [textCursor]
    );

    return onKeyDown;
};
