import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarrerasService } from '../carreras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  form!:FormGroup;

  constructor(
    public carrerasService:CarrerasService,
    private router:Router
  ){}

  ngOnInit(): void {
     this.form=new FormGroup({
      nombres:new FormControl('',[Validators.required]),
      estado:new FormControl('',Validators.required)
     });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.carrerasService.create(this.form.value).subscribe((res:any)=>{
      console.log('Carrera created successfully!');
      this.router.navigateByUrl('carreras/index');
    })
  }

}

