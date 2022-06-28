import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-pages',
  templateUrl: './selector-pages.component.html',
  styleUrls: []
})
export class SelectorPagesComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    region: ['', [Validators.required], []]
  });

  // llenar selectores

  regiones: string[] = [];

  constructor(private formBuilder: FormBuilder,
              private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    this.miFormulario.get('region')?.valueChanges
      .subscribe(region => {
        this.paisesService.getPaisesPorRegion(region)
          .subscribe(resultado => {
            console.log(resultado);
          });
      })
  }

  guardar(){

  }

}
