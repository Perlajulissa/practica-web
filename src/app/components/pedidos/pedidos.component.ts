import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  createFormGroup(){
    return new FormGroup({
      nombre:new FormControl('',[Validators.required]),
      telefono:new FormControl('',[Validators.required]),
      tipocomida:new FormControl('',[Validators.required]),
      direccion:new FormControl('',[Validators.required])
    });
  }
 ngOnInit(): void {
                                    
 }
}