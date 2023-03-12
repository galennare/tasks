import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */

const dieValues: string[] = [
    "&#9856;",
    "&#9857;",
    "&#9858;",
    "&#9859;",
    "&#9860;",
    "&#9861;"
];

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

function result(dieA: number, dieB: number): string {
    const loseWin = dieA == 1 ? "Lose" : "Win";
    return dieA == dieB ? loseWin : "";
}

export function TwoDice(): JSX.Element {
    const [dieA, setDieA] = useState<number>(1);
    const [dieB, setDieB] = useState<number>(6);
    return (
        <div>
            Two Dice
            <Button onClick={() => setDieA(d6())}>Roll Left</Button>
            <Button onClick={() => setDieB(d6())}>Roll Right</Button>
            <span data-testid={"left-die"}>{dieA + " " + dieValues[dieA]}</span>
            <span data-testid={"right-die"}>
                {dieB + " " + dieValues[dieB]}
            </span>
            <span>{result(dieA, dieB)}</span>
        </div>
    );
}
