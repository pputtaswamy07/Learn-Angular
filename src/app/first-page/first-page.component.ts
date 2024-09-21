import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css', '../../styles.css'],
})
export class FirstPageComponent {}
