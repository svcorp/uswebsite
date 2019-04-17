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
import { Pm101Component } from './products/pm-101/pm-101.component';
import { ClientsComponent } from './about-us/clients/clients.component';
import { S11Component } from './products/s-11/s-11.component';
import { AboutSvComponent } from './about-us/about-sv/about-sv.component';
import { DistributorsComponent } from './about-us/distributors/distributors.component';
import { DISTRIBUTORSLIST } from './about-us/distributors/distributors-list.component';
import { COUNTRIESLIST } from './about-us/distributors/countries-list.component';
import { InfaredTemperatureComponent } from './sensors/infared-temperature/infared-temperature.component';
import { Ma301Component } from './products/ma-301/ma-301.component';
import { Sa101Component } from './products/sa-101/sa-101.component';

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
  { path: 'products/pm-101',component: Pm101Component},
  { path: 'products/s-11',component: S11Component},
  { path: 'about-us/about-sv',component: AboutSvComponent},
  { path: 'about-us/clients',component: ClientsComponent},
  { path: 'about-us/distributors',component: DistributorsComponent},
  { path: 'sensors/infared-temperature', component: InfaredTemperatureComponent},
  { path: 'products/ma-301', component: Ma301Component },
  { path: 'products/sa-101', component: Sa101Component }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FooterComponent,
    ContactFormComponent,
    Sv1Component,
    S11Component,
    Pm101Component,
    Pa201Component,
    AboutSvComponent,
    DistributorsComponent,
    ClientsComponent,
    InfaredTemperatureComponent,
    Ma301Component,
    Sa101Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    // AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
