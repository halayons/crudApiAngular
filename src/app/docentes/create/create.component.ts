import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocentesService } from '../docentes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  form!:FormGroup;

  constructor(
    public docentesService:DocentesService,
    private router:Router
  ){}

  ngOnInit(): void {
     this.form=new FormGroup({
      nombres:new FormControl('',[Validators.required]),
      email:new FormControl('',Validators.required)
     });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.docentesService.create(this.form.value).subscribe((res:any)=>{
      console.log('Post created successfully!');
      this.router.navigateByUrl('docentes/index');
    })
  }

}

