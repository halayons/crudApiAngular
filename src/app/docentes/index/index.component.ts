import { Component, OnInit } from '@angular/core';
import { Docentes } from '../docentes';
import { DocentesService } from '../docentes.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  docentes:Docentes[]=[];

  constructor(public docentesService:DocentesService){}
  ngOnInit(): void {
    this.docentesService.getAll().subscribe((data:Docentes[])=>{
      this.docentes=data;
      console.log(this.docentes);
    })
  }

  deletePost(id:number){
    this.docentesService.delete(id).subscribe(res=>{
      this.docentes=this.docentes.filter(item=>item.id !==id);
      console.log('Posts deleted successfully!');
    })
  }

}
