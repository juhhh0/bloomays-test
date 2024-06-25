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

export type { Freelance, Mission };