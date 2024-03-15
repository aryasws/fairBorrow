import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {

  constructor(private routers:Router){}

  ngOnInit(): void {
    
    
  }
  router(){
 this.routers.navigateByUrl("")
  }
}
