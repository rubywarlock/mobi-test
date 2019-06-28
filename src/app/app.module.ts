import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WebProjectsComponent } from './components/web-projects/web-projects.component';
import { MobileAppsComponent } from './components/mobile-apps/mobile-apps.component';
import { HomeComponent } from './components/home/home.component';
import { ThreefoldComponent } from './components/projects/threefold/threefold.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ServicesComponent,
    GalleryComponent,
    ProjectsComponent,
    WebProjectsComponent,
    MobileAppsComponent,
    HomeComponent,
    ThreefoldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
