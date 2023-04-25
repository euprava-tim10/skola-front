import {Contest} from "./Contest";
import {Student} from "./Student";
import {Course} from "./Course";

export interface ContestApplication {
  id:number;
  contest:Contest | undefined;
  student:Student | undefined;
  rangPoints: number;
  firstWish: Course | undefined;
}
