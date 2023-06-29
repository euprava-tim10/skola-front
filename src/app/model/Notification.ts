import {Student} from "./Student";

export interface Notification {
  id:number;
  student:Student | undefined;
  text:string;
  link:string;
  date:Date;
}
