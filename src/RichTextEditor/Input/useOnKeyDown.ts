import { useCallback } from "react";

export default () => {
    const onKeyDown = useCallback(
        (evt: React.KeyboardEvent<HTMLDivElement>) => {
            const keyReactor = keyReactorMap[evt.key];

            if (typeof keyReactor === "function") {
                evt.preventDefault();
                evt.stopPropagation();
                keyReactor();
            }
        },
        []
    );

    return onKeyDown;
};

const keyReactorMap: { [k: string]: () => void } = {
    // ArrowRight: () => console.log("ArrowRight"),
    // ArrowLeft: () => console.log("ArrowLeft"),
    ArrowUp: () => console.log("ArrowUp"),
    ArrowDown: () => console.log("ArrowDown"),
    Enter: () => console.log("Enter"),
    Backspace: () => console.log("Backspace"),
    Shift: () => console.log("Shift"),
    Control: () => console.log("Control"),
    Tab: () => console.log("Tab"),
};
