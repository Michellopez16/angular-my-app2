import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  nombre:string ="hola mundo Michel";

  constructor() { }

  ngOnInit(): void {
  }

}
