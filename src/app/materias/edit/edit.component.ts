import { Component, OnInit } from '@angular/core';
import { Materias } from '../materias';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriasService } from '../materias.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  id!:number;
  materias!:Materias;
  form!:FormGroup;

  constructor(
    public materiasService:MateriasService,
    private route: ActivatedRoute,
    private router:Router
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['materiaId'];
    this.materiasService.find(this.id).subscribe((data: Materias)=>{
      this.materias = data;
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
  this.materiasService.update(this.id, this.form.value).subscribe((res:any) => {
       console.log('materia updated successfully!');
       this.router.navigateByUrl('materias/index');
  })
}

}
