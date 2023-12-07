import { Component, OnInit } from '@angular/core';
import { Materias } from '../materias';
import { MateriasService } from '../materias.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  materias:Materias[]=[];

  constructor(public materiasSrvice:MateriasService){}
  ngOnInit(): void {
    this.materiasSrvice.getAll().subscribe((data:Materias[])=>{
      this.materias=data;
      console.log(this.materias)
    })
  }

  deletePost(id:number){
    this.materiasSrvice.delete(id).subscribe(res=>{
      this.materias=this.materias.filter(item=>item.id !==id);
      console.log('materias deleted successfully!');
    })
  }

}
