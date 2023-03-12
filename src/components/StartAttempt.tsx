import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    return <div>Start Attempt</div>;
}
