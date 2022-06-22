import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  prenoms:string[] = ["Camille", "Alex", "Hacene", "Celine Dion"] ;
  constructor() { }

  ngOnInit(): void {
  }

}
