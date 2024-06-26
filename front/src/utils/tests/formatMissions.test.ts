import { expect, test } from "vitest";

import { formatMissions } from "../formatMissions";

test("formatMissions", () => {
  const missions = [
    {
      id: 7,
      label: "Architecte SI",
      missionType: "Tech",
      beginDate: "2024-06-29",
      endDate: "2024-12-24",
      freelance: {
        firstname: "Isac",
        lastname: "Spencer",
        email: "isac@mail.fr",
        id: 6,
      },
    },
    {
      id: 9,
      label: "Dev Ops",
      missionType: "Tech",
      beginDate: "2024-06-29",
      endDate: "2024-10-12",
      freelance: {
        firstname: "Steve",
        lastname: "Bama",
        email: "michel@mail.fr",
        id: 6,
      },
    },
    {
      id: 2,
      label: "Tech Lead Data",
      missionType: "Tech",
      beginDate: "2024-07-17",
      endDate: "2024-12-25",
      freelance: {
        firstname: "Erlind",
        lastname: "Sturce",
        email: "erlind.sturce@mail.fr",
        id: 2,
      },
    },
  ];

  const formatedMissions = formatMissions(missions, "begin");

  expect(formatedMissions).toEqual({
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
    ["2024-07-17"]: [
      {
        id: 2,
        beginMission: "2024-07-17",
        endMission: "2024-12-25",
        firstname: "Erlind",
        lastname: "Sturce",
      },
    ],
  });
});
