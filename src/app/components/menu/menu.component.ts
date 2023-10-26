import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(){}
  filterPost ='';
  posts =[
    {
      "no":1,
      "listaproduc":"Hamburguesa sencilla",
      "precio":"$80"
    },
    {
      "no":2,
      "listaproduc":"Dos hamburguesas",
      "precio":"$140"
    },
    {
      "no":3,
      "listaproduc":"Pizza mister ppep",
      "precio":"$280"
    },
    {
      "no":4,
      "listaproduc":"Pizza peperoni",
      "precio":"$280"
    },
    {
      "no":5,
      "listaproduc":"Pizza al pastor",
      "precio":"$280"
    }
  ];
  eventoMouseOut(){
    alert('Estas fuera del elemento!')
  }
  eventoDoble(){
    alert('Diste Doble click!')
  }
  ngOnInit(): void {
    
  }
}
