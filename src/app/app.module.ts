// Imports des modules d'angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { UserComponent } from './components/user/user.component';
import { CarteVisiteComponent } from './components/carte-visite/carte-visite.component';
import { AlertButtonComponent } from './components/alert-button/alert-button.component';
import { ListeComponent } from './components/liste/liste.component';
import { MagieComponent } from './components/magie/magie.component';
import { ListeFiltreComponent } from './components/liste-filtre/liste-filtre.component';
import { PoussinComponent } from './components/poussin/poussin.component';
import { UserCardsComponent } from './components/Exercices/exo1/user-cards/user-cards.component';
import { HidderComponent } from './components/Exercices/exo1/hidder/hidder.component';
import { ShowDateComponent } from './components/show-date/show-date.component';
import { GenerecAlertButtonComponent } from './components/generec-alert-button/generec-alert-button.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';
import { HorlogeComponent } from './components/Exercices/exo2/horloge/horloge.component';
import { ClockMenuComponent } from './components/Exercices/exo2/clock-menu/clock-menu.component';
import { ListeCoursesComponent } from './components/liste-courses/liste-courses.component';
import { ReactiveListeCoursesComponent } from './components/reactive-liste-courses/reactive-liste-courses.component';
import { FormBuilderListeCoursesComponent } from './components/form-builder-liste-courses/form-builder-liste-courses.component';
import { CardFormComponent } from './components/Exercices/exo3/card-form/card-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    UserComponent,
    CarteVisiteComponent,
    AlertButtonComponent,
    ListeComponent,
    MagieComponent,
    ListeFiltreComponent,
    PoussinComponent,
    UserCardsComponent,
    HidderComponent,
    ShowDateComponent,
    GenerecAlertButtonComponent,
    ButtonMenuComponent,
    HorlogeComponent,
    ClockMenuComponent,
    ListeCoursesComponent,
    ReactiveListeCoursesComponent,
    FormBuilderListeCoursesComponent,
    CardFormComponent,
  ],
  // On déclarera ici les modules à importer
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
