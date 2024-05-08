import { State, Action, StateContext, Selector, Store } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { UiService } from "../../services/ui.service";
import { SearchJobStateModel } from "./search-job.action";

@Injectable()
export class SearchJobState{
  constructor(private uiService: UiService){}

  @Selector()
  static getAdsFilters(state: SearchJobStateModel){
    return state.adsFilter;
  }

}

