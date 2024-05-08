import { IJobOpt } from "../../model/job-filter.opt.model";
import { ISearch } from "../../model/search.model";

export interface SearchJobStateModel {
  filters: ISearch;
  isAdvance: boolean;
  results: {[id: string]: IJobOpt},
  ids: number[],
  count: number,
  page_size: number,
  adsFilter: ISearch
}
