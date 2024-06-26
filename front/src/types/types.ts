export type Freelance = {
  firstname: string;
  lastname: string;
  email: string;
};

export type Mission = {
  id: number;
  beginDate: string;
  endDate: string;
  missionType: string;
  label: string;
  freelance: Freelance;
};

export type FormatedMission = {
  id: number;
  firstname: string;
  lastname: string;
  beginMission: string;
  endMission: string;
};

export type MissionsByDate = {
  [key: string]: FormatedMission[];
};

