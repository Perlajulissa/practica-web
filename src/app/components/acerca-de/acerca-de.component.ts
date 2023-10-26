import { Component, OnInit, ViewChild,ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent  {
  

  


  eventoMousemove(){
    alert('Estas moviendo el mouse dentro de este elemento!')
  } 
}

