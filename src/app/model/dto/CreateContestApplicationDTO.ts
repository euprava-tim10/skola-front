import {Course} from "../Course";

export interface CreateContestApplicationDTO {
  childFirstName: string;
  childLastName: string;
  childJmbg: string;
  firstWish: Course | undefined;
}
