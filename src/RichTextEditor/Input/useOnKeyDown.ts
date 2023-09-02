import { useCallback } from "react";

export default () => {
    const onKeyDown = useCallback(
        (evt: React.KeyboardEvent<HTMLDivElement>) => {
            const keyReactorMap: { [k: string]: () => void } = {
                Enter: () => console.log("Enter"),
            };

            const keyReactor = keyReactorMap[evt.key];

            if (typeof keyReactor === "function") {
                evt.stopPropagation();
                evt.preventDefault();
                keyReactor();
            }
        },
        []
    );

    return onKeyDown;
};
