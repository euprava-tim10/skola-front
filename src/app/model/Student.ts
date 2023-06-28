import {School} from "./School";

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  jmbg: string;
  course: string;
  school: School | undefined;
  gpa:Map<string,number>;
}
