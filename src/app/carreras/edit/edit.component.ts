import { Component, OnInit } from '@angular/core';
import { Carreras } from '../carreras';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarrerasService } from '../carreras.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  id!:number;
  carreras!:Carreras;
  form!:FormGroup;

  constructor(
    public carrerasService:CarrerasService,
    private route: ActivatedRoute,
    private router:Router
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['carreraId'];
    this.carrerasService.find(this.id).subscribe((data: Carreras)=>{
      this.carreras = data;
  });
  this.form = new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    estado: new FormControl('', Validators.required)
  });

}
get f(){
  return this.form.controls;
}
submit(){
  console.log(this.form.value);
  this.carrerasService.update(this.id, this.form.value).subscribe((res:any) => {
       console.log('Carrera updated successfully!');
       this.router.navigateByUrl('carreras/index');
  })
}
}