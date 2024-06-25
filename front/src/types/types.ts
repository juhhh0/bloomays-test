type Freelance = {
  firstname: string;
  lastname: string;
  email: string;
};

type Mission = {
  id: number;
  beginDate: string;
  endDate: string;
  missionType: string;
  label: string;
  freelance: Freelance;
};

type FormatedMission = {
  id: number;
  firstname: string;
  lastname: string;
  beginMission: string;
  endMission: string;
};

export type { Freelance, Mission, FormatedMission };
