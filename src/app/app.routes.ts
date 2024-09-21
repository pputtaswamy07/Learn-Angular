import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { CreateProjectComponent } from './create-project/create-project.component';

export const routes: Routes = [
  { path: '', component: FirstPageComponent, pathMatch: 'full' },
  { path: 'firstPage', component: FirstPageComponent },
  { path: 'createProject', component: CreateProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
