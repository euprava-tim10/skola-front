import {School} from "./School";
import {CourseQuota} from "./CourseQuota";

export interface Contest {
  id:number;
  school:School | undefined;
  quotas: CourseQuota[];
  primarySchoolQuota:number;
  text: string;
  startDate:Date;
  endDate:Date;
}
