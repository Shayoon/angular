import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generec-alert-button',
  templateUrl: './generec-alert-button.component.html',
  styleUrls: ['./generec-alert-button.component.scss']
})
export class GenerecAlertButtonComponent implements OnInit {

  @Input()
  buttonTitle!: string;

  @Input()
  alertMessage! : string;

  constructor() { }

  ngOnInit(): void {
  }


  onClick(){
    alert(this.alertMessage);
  }
}
