export interface DiplomaResponseDTO {
  firstName:string;
  lastName:string;
  jmbg:string;
  schoolName:string;
  schoolType:string;
  course:string;
  gpa:Map<number, number>;
  date:Date;
}
