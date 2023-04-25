import {Student} from "./Student";
import {School} from "./School";

export interface Diploma {
  id:number;
  student:Student | undefined;
  school:School | undefined;
  course:string;
  gpa:Map<number, number>;
  date:Date;
}
