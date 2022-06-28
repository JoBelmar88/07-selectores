import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-pages',
  templateUrl: './selector-pages.component.html',
  styleUrls: []
})
export class SelectorPagesComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    region: ['', [Validators.required], []]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  guardar(){
    
  }

}
