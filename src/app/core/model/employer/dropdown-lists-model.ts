export class JobFunction {
	id: number;
	created: Date;
	modified: Date;
	function_name: string;
}
export interface SalaryType {
	id: number;
	created: Date;
	modified: Date;
	salary_name: string;
	ordering_no: number;
}
export interface IAdRevive {
	href: string;
	target: string;
	imgSrc: string;
	imgAlt: string;
	impressionUrl: string;
}
