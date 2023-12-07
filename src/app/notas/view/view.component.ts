import { Component, OnInit } from '@angular/core';
import { Notas } from '../notas';
import { NotasService } from '../notas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  id!: number;
  notas!: Notas;

  constructor(
    public notasService: NotasService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
   
  ngOnInit(): void {
    this.id = this.route.snapshot.params['notaId'];
        
    this.notasService.find(this.id).subscribe((data: Notas)=>{
      this.notas = data;
    });
  }

}
