import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { CreateProjectComponent } from './create-project/create-project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstPageComponent, CreateProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-webpage';
}
