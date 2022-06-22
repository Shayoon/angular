import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-menu',
  templateUrl: './clock-menu.component.html',
  styleUrls: ['./clock-menu.component.scss']
})
export class ClockMenuComponent implements OnInit {

  timezones: string[] = [
    'Europe/Paris',
    'Europe/London',
    'Europe/Helsinki',
    'America/Los_Angeles',
    'America/Montreal',
    'Asia/Shanghai'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setTime(timeZone: string) : string {
    const date = new Date().toLocaleString('fr-FR', {timeZone : timeZone});
    const time = date.split(' ')[1];
    setInterval(this.setTime,1000)
    return time;


  }

}
