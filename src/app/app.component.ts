//Import du décorateur "Component"
import { Component } from '@angular/core';


// Appel du décourateur @Component
// Il va dire que cette classe est un composant
@Component({
  // Le sélecteur est le nom de la balise avec laquelle on doit appeller notre composant.
  selector: 'app-root', // <app-root></app-root>
  // Le templateUrl permet d'aller récupérer le fichier html correspondant
  templateUrl: './app.component.html',
  // StyleUrl permet de récupérer la feuille de style de notre composant
  styleUrls: ['./app.component.scss']
})

// La classe Appcomponent qui est crée.
export class AppComponent {
  title = 'MaPremierePage';
}
