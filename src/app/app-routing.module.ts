import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { MobileAppsComponent } from './components/mobile-apps/mobile-apps.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WebProjectsComponent } from './components/web-projects/web-projects.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsGuard } from './components/projects/projects.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'gallery',      component: GalleryComponent },
  { path: 'mobile-apps',  component: MobileAppsComponent },
  { path: 'projects',     component: ProjectsComponent, canActivate: [ProjectsGuard] },
  { path: 'services',     component: ServicesComponent },
  { path: 'web-projects', component: WebProjectsComponent },
  { path: 'home',         component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
