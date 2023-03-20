import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <span style={{ fontSize: "18pt", fontWeight: "bold" }}>
                Check Answer
            </span>
            <Form.Control
                as="textarea"
                rows={1}
                value={answer}
                onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                }) => setAnswer(e.target.value)}
            />
            {answer == expectedAnswer ? "\u2714\uFE0F" : "\u274C"}
        </div>
    );
}
