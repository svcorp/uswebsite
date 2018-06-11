import { Ch1Component } from './products/pa-201/ch1/ch1.component';
import { Ch2Component } from './products/pa-201/ch2/ch2.component';
import { Ch3Component } from './products/pa-201/ch3/ch3.component';
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
  // { path: 'products/pa-201/ch1',component: Ch1Component},
  // { path: 'products/pa-201/ch2',component: Ch2Component},
  // { path: 'products/pa-201/ch3',component: Ch3Component}

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
