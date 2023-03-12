import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "st_patricks_day"
    | "cinco_de_mayo"
    | "juneteenth"
    | "independence_day"
    | "christmas";

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] =
        useState<Holiday>("st_patricks_day");

    const order: Holiday[] = [
        "st_patricks_day",
        "cinco_de_mayo",
        "juneteenth",
        "independence_day",
        "christmas"
    ];

    const holiday_strs: Record<Holiday, string> = {
        st_patricks_day: "St. Patrick's Day &#127808;",
        cinco_de_mayo: "Cinco de Mayo &#129702;",
        juneteenth: "Juneteenth &#128330;&#65039;",
        independence_day: "Independence Day &#127878;",
        christmas: "Christmas &#127876;"
    };

    const next_alphabetical: Record<Holiday, Holiday> = {
        christmas: "cinco_de_mayo",
        cinco_de_mayo: "independence_day",
        independence_day: "juneteenth",
        juneteenth: "st_patricks_day",
        st_patricks_day: "christmas"
    };

    return (
        <div>
            Cycle Holiday{" "}
            <Button
                onClick={() =>
                    setCurrentHoliday(next_alphabetical[currentHoliday])
                }
            >
                Advance by Alphabet
            </Button>{" "}
            <Button
                onClick={() =>
                    setCurrentHoliday(
                        order[(order.indexOf(currentHoliday) + 1) % 5]
                    )
                }
            >
                Advance by Year
            </Button>
            Holiday: {holiday_strs[currentHoliday]}
        </div>
    );
}
