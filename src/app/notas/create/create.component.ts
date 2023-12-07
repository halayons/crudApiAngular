import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotasService } from '../notas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  form!:FormGroup;

  constructor(
    public notasService:NotasService,
    private router:Router
  ){}

  ngOnInit(): void {
     this.form=new FormGroup({
      nota1:new FormControl('',[Validators.required]),
      nota2:new FormControl('',Validators.required),
      nota3:new FormControl('',Validators.required)
     });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.notasService.create(this.form.value).subscribe((res:any)=>{
      console.log('notas created successfully!');
      this.router.navigateByUrl('notas/index');
    })
  }

}

