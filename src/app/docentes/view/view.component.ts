import { Component, OnInit } from '@angular/core';
import { Docentes } from '../docentes';
import { DocentesService } from '../docentes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  id!: number;
  docentes!: Docentes;

  constructor(
    public docentesService: DocentesService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
   
  ngOnInit(): void {
    this.id = this.route.snapshot.params['docenteId'];
        
    this.docentesService.find(this.id).subscribe((data: Docentes)=>{
      this.docentes = data;
    });
  }

}
