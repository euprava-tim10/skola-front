import {School} from "./School";

export interface Course {
  id:number;
  name:string;
  school:School | undefined;
}
