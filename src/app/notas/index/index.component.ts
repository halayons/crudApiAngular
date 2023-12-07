import { Component, OnInit } from '@angular/core';
import { Notas } from '../notas';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  notas:Notas[]=[];

  constructor(public notasService:NotasService){}
  ngOnInit(): void {
    this.notasService.getAll().subscribe((data:Notas[])=>{
      this.notas=data;
      console.log(this.notas);
    })
  }

  deletePost(id:number){
    this.notasService.delete(id).subscribe(res=>{
      this.notas=this.notas.filter(item=>item.id !==id);
      console.log('nota deleted successfully!');
    })
  }

}
