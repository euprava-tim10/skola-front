import {School} from "./School";
import {CourseQuota} from "./CourseQuota";

export interface Contest {
  id:number;
  school:School | undefined;
  quotas: CourseQuota[];
  primarySchoolQuota:number;
  startDate:Date;
  endDate:Date;
}
