import {Course} from "./Course";

export interface CourseQuota {
  id: number;
  quota: number;
  course: Course | undefined;
}
