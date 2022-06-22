import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-builder-liste-courses',
  templateUrl: './form-builder-liste-courses.component.html',
  styleUrls: ['./form-builder-liste-courses.component.scss']
})
export class FormBuilderListeCoursesComponent implements OnInit {

  article: FormGroup = this.formBuilder.group({
    designation: ['', Validators.required],
    prix: ['', Validators.required]
  })

  submitted: boolean =false;

  articles:any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  private addArticle(){
    this.articles.push(this.article.value)
    this.article.reset();
    this.submitted = false;
  }

  onSubmit() : boolean{
    this.submitted = true;
    if (this.article.invalid) {
      return false
    }
    else {
      this.addArticle();
      return true;
    }
  }


  get totalPrice() : number{
    return this.articles.reduce((total, article)=> total + article.prix, 0)
  }

  get form(){
    return this.article.controls;
  }

}
