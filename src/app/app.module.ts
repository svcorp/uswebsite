import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { Sv1Component } from './products/sv-1/sv-1.component';
import { Pa201Component } from './products/pa-201/pa-201.component';
import { AboutSvComponent } from './about-us/about-sv/about-sv.component';
import { DistributorsComponent } from './about-us/distributors/distributors.component';


export const appRoutes: Routes = [
  { path: 'home',
    component: MainPageComponent
  },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  { path: 'products/sv-1', component: Sv1Component },
  { path: 'products/pa-201',component: Pa201Component},
  { path: 'about-us/about-sv',component: AboutSvComponent},
  { path: 'about-us/distributors',component: DistributorsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FooterComponent,
    ContactFormComponent,
    Sv1Component,
    Pa201Component,
    AboutSvComponent,
    DistributorsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
    // AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
