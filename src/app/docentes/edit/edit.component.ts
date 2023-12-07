import { Component, OnInit } from '@angular/core';
import { Docentes } from '../docentes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocentesService } from '../docentes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  id!:number;
  docentes!:Docentes;
  form!:FormGroup;

  constructor(
    public docentesService:DocentesService,
    private route: ActivatedRoute,
    private router:Router
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['docenteId'];
    this.docentesService.find(this.id).subscribe((data: Docentes)=>{
      this.docentes = data;
  });
  this.form = new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    email: new FormControl('', Validators.required)
  });

}
get f(){
  return this.form.controls;
}
submit(){
  console.log(this.form.value);
  this.docentesService.update(this.id, this.form.value).subscribe((res:any) => {
       console.log('Docentes updated successfully!');
       this.router.navigateByUrl('docentes/index');
  })
}
}