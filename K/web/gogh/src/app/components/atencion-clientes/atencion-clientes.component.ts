import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atencion-clientes',
  templateUrl: './atencion-clientes.component.html',
  styleUrls: ['./atencion-clientes.component.css']
})
export class AtencionClientesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mensaje(){
    alert("Gracias, utilizaremos su respuesta para mejorar nuestras instalaciones");
  }

}
