import { Component, OnInit } from '@angular/core';
import { Carreras } from '../carreras';
import { CarrerasService } from '../carreras.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  carreras:Carreras[]=[];

  constructor(public carrerasService:CarrerasService){}
  ngOnInit(): void {
    this.carrerasService.getAll().subscribe((data:Carreras[])=>{
      this.carreras=data;
      console.log(this.carreras);
    })
  }

  deletePost(id:number){
    this.carrerasService.delete(id).subscribe(res=>{
      this.carreras=this.carreras.filter(item=>item.id !==id);
      console.log('Posts deleted successfully!');
    })
  }

}
