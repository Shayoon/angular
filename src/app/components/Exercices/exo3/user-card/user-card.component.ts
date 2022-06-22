import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {


  @Input()
  nom!:string;

  @Input()
  prenom!:string;

  @Input()
  entreprise!:string;

  @Input()
  telephone!:number;

  @Input()
  email!:string;


  constructor() { }

  ngOnInit(): void {
  }

}
