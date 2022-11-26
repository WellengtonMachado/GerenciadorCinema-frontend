import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sala-app',
  template: `
    <router-outlet></router-outlet>
  `
})
export class SalaAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
