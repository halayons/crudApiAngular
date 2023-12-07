import { Component, OnInit } from '@angular/core';
import { Notas } from '../notas';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotasService } from '../notas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  id!:number;
  notas!:Notas;
  form!:FormGroup;

  constructor(
    public notasService:NotasService,
    private route: ActivatedRoute,
    private router:Router
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['notaId'];
    this.notasService.find(this.id).subscribe((data: Notas)=>{
      this.notas = data;
  });
  this.form = new FormGroup({
    nota1: new FormControl('', [Validators.required]),
    nota2: new FormControl('', Validators.required),
    nota3: new FormControl('', Validators.required)
  });

}
get f(){
  return this.form.controls;
}
submit(){
  console.log(this.form.value);
  this.notasService.update(this.id, this.form.value).subscribe((res:any) => {
       console.log('Notas updated successfully!');
       this.router.navigateByUrl('notas/index');
  })
}
}
