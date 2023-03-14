import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [isStudent, setIsStudent] = useState<boolean>(false);

    return (
        <div>
            <h3>Edit Mode</h3>
        </div>
    );
}
