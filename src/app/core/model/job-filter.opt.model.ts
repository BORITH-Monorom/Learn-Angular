import { JobFunction, SalaryType } from "./employer/dropdown-lists-model";

export interface IJobOpt {
  id: number;
  title: string;
  functions: JobFunction;
  locations: Location;
  salary_type: SalaryType;
  salary_start: number;
  salary_end: number;
  currency: string;
  closing_date: Date;
  contact_name: string;
  contact_title: string;
  contact_phone_number: string;
  contact_email: string;
  company: ICompanyOpt;
  is_premium: boolean;
  contact_cc_to_email: [];
  publish_date: Date;
  publish_enddate: Date;
}
export interface ICompanyOpt {
  id: number;
  title: string;
  company_name: string;
  company_local_name: string;
  company_logo: IFileOpt;
  company_cover: IFileOpt
}
export interface IFileOpt {
  id: number;
  file: string;
}
