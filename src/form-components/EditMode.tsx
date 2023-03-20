import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <span style={{ fontSize: "18pt", fontWeight: "bold" }}>
                Edit Mode
            </span>

            <Form.Switch
                type="switch"
                checked={inEditMode}
                label="Enable Edit Mode"
                onChange={(e) => setInEditMode(e.target.checked)}
            />

            {inEditMode ? (
                <div>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e: {
                            target: { value: React.SetStateAction<string> };
                        }) => setName(e.target.value)}
                    />
                    <Form.Check
                        type="checkbox"
                        id="student"
                        checked={isStudent}
                        label="Student?"
                        onChange={(e) => setIsStudent(e.target.checked)}
                    />
                </div>
            ) : (
                <div></div>
            )}

            {name}
            {isStudent ? " is a student." : " is not a student."}
        </div>
    );
}
