import {School} from "./School";
import {ContestApplication} from "./ContestApplication";

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  jmbg: string;
  course: string;
  school: School | undefined;
  gpa:Map<string,number>;
  applications:ContestApplication[];
}
