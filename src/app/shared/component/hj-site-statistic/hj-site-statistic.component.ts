
import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/core/services/employer.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
@UntilDestroy()
@Component({
    selector: 'app-hj-site-statistic',
    templateUrl: './hj-site-statistic.component.html',
    styleUrl: './hj-site-statistic.component.scss',

})
export class HjSiteStatisticComponent implements OnInit {
  constructor(private eService: EmployerService) {}
  ngOnDestroy(): void {}
  total_emp: number;
  total_vac: number;
  total_imp: number;
  total_vis: number;
  total_vie: number;

  ngOnInit(): void {
    this.eService.getSiteStatistic().pipe(untilDestroyed(this)).subscribe(siteData => {
      if (siteData) {
        this.total_emp = siteData["total_employers"];
        this.total_vac = siteData["vaccancies_jobs"];
        this.total_imp = siteData["jobs_impression"];
        this.total_vis = siteData["site_visited"];
        this.total_vie = siteData["jobs_view"];
      }
    });
  }
}
