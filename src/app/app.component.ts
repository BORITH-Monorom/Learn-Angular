import { Component, inject } from '@angular/core';
import { DarkModeService } from './core/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Learn_Angular';
  darkModeService: DarkModeService = inject(DarkModeService);
}
