export type Stat = {
  head: string;
  info: string;
  icon: string;
};

export type Benefit = {
  icon: string;
  title: string;
  info: string;
};

export type Hackathon = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  overview: string;
  image: string;
  level: "Easy" | "Medium" | "Hard";
};

export type FilterOptions = {
  status: {
    All: boolean;
    Active: boolean;
    Upcoming: boolean;
    Past: boolean;
  };
  level: {
    Easy: boolean;
    Medium: boolean;
    Hard: boolean;
  };
};

export type Level = "Easy" | "Medium" | "Hard";
