export interface ISearch {
  search?: string;
  job_category?: number;
  industries?: number;
  job_type?: number;
  sub_industries?: number;
  countries?: number;
  locations?: number;
  functions?: number;
  company?: number;
  page_size?: number;
  page?:number;
  locationStr?: string;
  functionStr?: string;
  allCountry: boolean;
  group_salary?: string;
  exclude_agency_job?: boolean;
}
