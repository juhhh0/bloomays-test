import {test, expect} from "vitest";

import {countMissions} from "../countMissions";

test("countMissions", () => {
    const data = {
        ["2024-07-17"]: [
            {
                id: 2,
                beginMission: "2024-07-17",
                endMission: "2024-12-25",
                firstname: "Erlind",
                lastname: "Sturce",
            },
        ],
        ["2024-06-29"]: [
            {
                id: 7,
                beginMission: "2024-06-29",
                endMission: "2024-12-24",
                firstname: "Isac",
                lastname: "Spencer",
            },
            {
                id: 9,
                beginMission: "2024-06-29",
                endMission: "2024-10-12",
                firstname: "Steve",
                lastname: "Bama",
            },
        ],
    };

    const count = countMissions(data);

    expect(count).toBe(3);
    
})