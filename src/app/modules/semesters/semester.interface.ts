export type SemesterType = {
  name: "spring" | "summer" | "fall";
  year: number;
  studentCount: {
    [key: string]: number;
  };
  startMonth: "January" | "May" | "September";
  endMonth: "April" | "August" | "December";
};
