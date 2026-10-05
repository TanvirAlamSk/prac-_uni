export type SemesterType = {
  name: "spring" | "summer" | "fall";
  year: number;
  startMonth: "January" | "May" | "September";
  endMonth: "April" | "August" | "December";
};
