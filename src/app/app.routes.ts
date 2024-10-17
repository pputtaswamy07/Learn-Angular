import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ModuleComponent } from './module/module.component';
import { DirectivesComponent } from './directives/directives.component';

export const routes: Routes = [
  { path: '', component: FirstPageComponent, pathMatch: 'full' },
  { path: 'firstPage', component: FirstPageComponent },
  { path: 'createProject', component: CreateProjectComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'module', component: ModuleComponent },
  { path: 'directives', component: DirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
