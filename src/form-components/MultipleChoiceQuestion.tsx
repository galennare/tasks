import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <span style={{ fontSize: "18pt", fontWeight: "bold" }}>
                Multiple Choice Question
            </span>

            <Form.Group controlId="userEmotions">
                <Form.Label>How do you feel?</Form.Label>
                <Form.Select
                    value={options[0]}
                    onChange={(e) => setAnswer(e.target.value)}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {answer == expectedAnswer ? "\u2714\uFE0F" : "\u274C"}
        </div>
    );
}
