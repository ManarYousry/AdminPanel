import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
 
  isMenuOpen = true;
  contentMargin = 240;
  constructor() { }

  ngOnInit(): void {
  }
  onToolbarMenuToggle() {
 
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 0 ;
     
      
    } else {
      this.contentMargin = 240;
  
     

    }
  }

}
