export type Name={
        firstName:string;
        lastName:string;
 }

export type Guardian={
    name:Name;
    relation:string;
    phoneNumber:string
}

export type Student={
    name:Name,
    id:string,
    year:number,
    semester:string,
    department:string,
    dateOfBirth:string;
    address:string;
    gender:"male"|"female";
    bloodGroup?:"A"|"B"|"O"|"AB"
    phoneNumber:string;
    guardian:Guardian
}