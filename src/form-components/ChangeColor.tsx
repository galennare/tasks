import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    function updateColor(e: React.ChangeEvent<HTMLInputElement>) {
        setColor(e.target.value);
    }

    return (
        <div>
            <span style={{ fontSize: "18pt", fontWeight: "bold" }}>
                Change Color
            </span>

            <div>
                <Form.Check
                    type="radio"
                    name="colors"
                    inline={true}
                    onChange={updateColor}
                    id="color-check-red"
                    label="red"
                    value="red"
                    checked={color === "red"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    inline={true}
                    onChange={updateColor}
                    id="color-check-blue"
                    label="blue"
                    value="blue"
                    checked={color === "blue"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    inline={true}
                    onChange={updateColor}
                    id="color-check-green"
                    label="green"
                    value="green"
                    checked={color === "green"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    inline={true}
                    onChange={updateColor}
                    id="color-check-yellow"
                    label="yellow"
                    value="yellow"
                    checked={color === "yellow"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    inline={true}
                    onChange={updateColor}
                    id="color-check-magenta"
                    label="magenta"
                    value="magenta"
                    checked={color === "magenta"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    inline={true}
                    onChange={updateColor}
                    id="color-check-cyan"
                    label="cyan"
                    value="cyan"
                    checked={color === "cyan"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    inline={true}
                    onChange={updateColor}
                    id="color-check-violet"
                    label="violet"
                    value="violet"
                    checked={color === "violet"}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    inline={true}
                    onChange={updateColor}
                    id="color-check-white"
                    label="white"
                    value="white"
                    checked={color === "white"}
                />
            </div>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            >
                {color}
            </div>
        </div>
    );
}
