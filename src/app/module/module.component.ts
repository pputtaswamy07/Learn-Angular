import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-module',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css', '../../styles.css'],
})
export class ModuleComponent {}
