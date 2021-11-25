import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  onClickRecipe() {
    this.featureSelected.emit(true); 
  }
  onClickShopping() {
    this.featureSelected.emit(false);  
  }

}
