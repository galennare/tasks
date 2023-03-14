import React, { useState } from "react";
import {Button, Form} from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<number>(0);

    return (
        <div>
            <span style={{ fontSize: "18pt", fontWeight: "bold" }}>
                Give Attempts ({attempts})
            </span>
            <Form.Control
                type="number"
                value={requested}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    let input: number = parseInt(e.target.value);
                    input = isNaN(input) ? 0 : input;
                    setRequested(input);
                }}
            />
            <Button
                disabled={attempts <= 0}
                onClick={() => setAttempts(attempts - 1)}
            >
                Use
            </Button>
            <Button onClick={() => setAttempts(attempts + requested)}>
                Gain
            </Button>
        </div>
    );
}
