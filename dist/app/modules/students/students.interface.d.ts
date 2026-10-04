export type Name = {
    firstName: string;
    lastName: string;
};
export type Guardian = {
    name: Name;
    relation: string;
    phoneNumber: string;
};
export type Student = {
    name: Name;
    id: number;
    dateOfBirth: string;
    address: string;
    gender: "male" | "female";
    bloodGroup?: "A" | "B" | "O" | "AB";
    phoneNumber: string;
    guardian: Guardian;
};
//# sourceMappingURL=students.interface.d.ts.map