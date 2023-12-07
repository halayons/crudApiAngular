import { Component, OnInit } from '@angular/core';
import { Materias } from '../materias';
import { MateriasService } from '../materias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  id!: number;
  materias!: Materias;

  constructor(
    public materiasService: MateriasService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
   
  ngOnInit(): void {
    this.id = this.route.snapshot.params['materiaId'];
        
    this.materiasService.find(this.id).subscribe((data: Materias)=>{
      this.materias = data;
    });
  }

}
