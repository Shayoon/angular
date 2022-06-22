import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  utilisateur: FormGroup = this.formBuilder.group({
    nom: ['', Validators.compose([Validators.minLength(2),Validators.required])],
    prenom: ['', Validators.compose([Validators.minLength(2),Validators.required])],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    entreprise:  ['', Validators.compose([Validators.minLength(2),Validators.required])],
    telephone:  ['', Validators.compose([Validators.pattern("[0-9]{9}"),Validators.required])],
  })

  utilisateurs: any[] = [];

  submitted: boolean = false;


  constructor(private formBuilder: FormBuilder) { 

  }

  ngOnInit(): void {
  }

  onSubmit() : boolean{
    this.submitted = true;
    if (this.utilisateur.invalid) {
      return false
    }
    else {
      this.addUtilisateur();
      return true;
    }
  }

  private addUtilisateur(){
    this.utilisateurs.push(this.utilisateur.value);
    this.utilisateur.reset;
    this.submitted = false;
  }

  get form(){
    return this.utilisateur.controls;
  }

}
